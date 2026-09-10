"use client";
import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { portfolio, PENDING } from "@/data/portfolio";
export function ContactActions() {
  const [status, setStatus] = useState("");
  const email = portfolio.contact.email;
  async function copy() {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Correo copiado.");
    } catch {
      setStatus(
        "No se pudo copiar. Selecciona el correo y cópialo manualmente.",
      );
    }
  }
  return (
    <div className="contact-email">
      <span className="eyebrow">CORREO PROFESIONAL</span>
      <div className="email-row">
        {email ? (
          <a href={`mailto:${email}`}>
            <Mail size={20} aria-hidden="true" />
            {email}
          </a>
        ) : (
          <span className="email-pending">{PENDING}</span>
        )}
        <button
          type="button"
          className="icon-button"
          disabled={!email}
          onClick={copy}
          aria-label={
            email ? "Copiar correo" : "Copiar correo: pendiente por completar"
          }
        >
          {status === "Correo copiado." ? (
            <Check size={19} />
          ) : (
            <Copy size={19} />
          )}
        </button>
      </div>
      <p className="copy-status" role="status">
        {status}
      </p>
    </div>
  );
}
