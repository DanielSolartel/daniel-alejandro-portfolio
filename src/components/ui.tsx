import { ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { portfolio, PENDING } from "@/data/portfolio";
import { externalUrl } from "@/lib/links";
import type { ReactNode } from "react";

export function SectionTitle({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
export function ExternalLink({
  href,
  children,
  className = "",
  pendingLabel,
}: {
  href: string | null;
  children: ReactNode;
  className?: string;
  pendingLabel?: string;
}) {
  const safe = externalUrl(href);
  return safe ? (
    <a
      className={className}
      href={safe}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={15} aria-hidden="true" />
      <span className="sr-only"> (abre en otra pestaña)</span>
    </a>
  ) : (
    <span
      className={`${className} unavailable`}
      title={PENDING}
      aria-label={pendingLabel}
    >
      {children}
      <span className="pending-small">Pendiente</span>
    </span>
  );
}
export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`social-links ${compact ? "compact" : ""}`}>
      <ExternalLink
        href={portfolio.links.github}
        pendingLabel={`GitHub: ${PENDING}`}
      >
        <Github size={18} aria-hidden="true" />
        GitHub
      </ExternalLink>
      <ExternalLink
        href={portfolio.links.linkedin}
        pendingLabel={`LinkedIn: ${PENDING}`}
      >
        <Linkedin size={18} aria-hidden="true" />
        LinkedIn
      </ExternalLink>
    </div>
  );
}
export function CvButton({ secondary = false }: { secondary?: boolean }) {
  const content = (
    <>
      <Download size={17} aria-hidden="true" />
      Descargar CV
    </>
  );
  return portfolio.cv.available ? (
    <a
      href={portfolio.cv.path}
      download
      className={`button ${secondary ? "secondary" : "primary"}`}
    >
      {content}
    </a>
  ) : (
    <button
      type="button"
      disabled
      className="button secondary"
      title={`Currículum: ${PENDING}`}
      aria-label={`Descargar CV: ${PENDING}`}
    >
      {content}
      <span className="pending-small">Pendiente</span>
    </button>
  );
}
