"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Award, FileText, X } from "lucide-react";
import {
  certificateCategories,
  portfolio,
  type Certificate,
} from "@/data/portfolio";
import { assetUrl, externalUrl } from "@/lib/links";
export function CertificateGallery() {
  const [category, setCategory] = useState("Todos");
  const [selected, setSelected] = useState<Certificate | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!selected || !dialog.current) return;
    const modal = dialog.current;
    modal.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      modal.close();
      document.body.style.overflow = previous;
    };
  }, [selected]);
  const filtered = portfolio.certificates.filter(
    (cert) => category === "Todos" || cert.category === category,
  );
  return (
    <>
      <div
        className="certificate-filters"
        aria-label="Filtrar certificados por categoría"
      >
        {["Todos", ...certificateCategories].map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="sr-only" role="status">
        {filtered.length}{" "}
        {filtered.length === 1 ? "certificado" : "certificados"} en {category}
      </div>
      <div className="certificate-grid">
        {filtered.map((certificate, i) => (
          <button
            className="certificate-card"
            type="button"
            key={certificate.id}
            onClick={() => setSelected(certificate)}
            aria-label={`Abrir certificado de ${certificate.label}`}
          >
            <div className="certificate-preview">
              {assetUrl(certificate.image) ? (
                <Image
                  src={assetUrl(certificate.image)!}
                  alt={certificate.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                />
              ) : (
                <>
                  <span className="certificate-number">0{i + 1}</span>
                  <Award size={42} strokeWidth={1} aria-hidden="true" />
                  <span>VISTA PREVIA PENDIENTE</span>
                  <div className="certificate-rule" />
                </>
              )}
              <span className="expand-certificate">
                <ArrowUpRight size={19} aria-hidden="true" />
              </span>
            </div>
            <div className="certificate-info">
              <span className="eyebrow">{certificate.category}</span>
              <h3>{certificate.label}</h3>
              <p>{certificate.institution}</p>
              {certificate.pending && <p className="credential-pending">Título oficial y credencial pendientes</p>}
            </div>
          </button>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-certificates">
          <Award size={28} aria-hidden="true" />
          <p>No hay certificados añadidos en esta categoría.</p>
          <span>Pendiente por completar</span>
        </div>
      )}
      <dialog
        ref={dialog}
        className="certificate-dialog"
        aria-labelledby="certificate-title"
        onCancel={() => setSelected(null)}
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            const r = e.currentTarget.getBoundingClientRect();
            if (
              e.clientX < r.left ||
              e.clientX > r.right ||
              e.clientY < r.top ||
              e.clientY > r.bottom
            )
              setSelected(null);
          }
        }}
      >
        {selected && (
          <>
            <button
              type="button"
              className="icon-button dialog-close"
              aria-label="Cerrar certificado"
              onClick={() => setSelected(null)}
              autoFocus
            >
              <X />
            </button>
            <div className="dialog-preview">
              {assetUrl(selected.image) ? (
                <Image
                  src={assetUrl(selected.image)!}
                  alt={selected.imageAlt}
                  fill
                  sizes="(max-width: 767px) 90vw, 650px"
                />
              ) : (
                <>
                  <Award size={60} strokeWidth={0.8} aria-hidden="true" />
                  <span>Vista previa pendiente</span>
                </>
              )}
            </div>
            <div className="dialog-content">
              <p className="eyebrow">{selected.category}</p>
              <h2 id="certificate-title">{selected.label}</h2>
              {selected.pending && (
                <p className="dialog-notice">
                  Formación confirmada por Alejandro. El título oficial, la fecha y los archivos del certificado están pendientes.
                </p>
              )}
              <dl>
                <div>
                  <dt>Título exacto</dt>
                  <dd>{selected.name}</dd>
                </div>
                <div>
                  <dt>Institución o programa</dt>
                  <dd>{selected.institution}</dd>
                </div>
                <div>
                  <dt>Fecha</dt>
                  <dd>{selected.date}</dd>
                </div>
                <div>
                  <dt>ID de credencial</dt>
                  <dd>{selected.credentialId}</dd>
                </div>
              </dl>
              <div className="dialog-actions">
                {assetUrl(selected.pdf) ? (
                  <a
                    className="button secondary"
                    href={assetUrl(selected.pdf)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText size={16} />
                    Abrir PDF
                    <span className="sr-only"> (abre en otra pestaña)</span>
                  </a>
                ) : (
                  <span className="pending-small">PDF pendiente</span>
                )}
                {externalUrl(selected.verificationUrl) ? (
                  <a
                    className="button primary"
                    href={externalUrl(selected.verificationUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verificar credencial
                    <ArrowUpRight size={16} />
                    <span className="sr-only"> (abre en otra pestaña)</span>
                  </a>
                ) : (
                  <span className="pending-small">Verificación pendiente</span>
                )}
              </div>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
