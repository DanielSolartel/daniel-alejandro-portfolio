"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";
const links = [
  ["inicio", "Inicio"],
  ["sobre-mi", "Sobre mí"],
  ["proyectos", "Proyectos"],
  ["certificados", "Certificados"],
  ["habilidades", "Habilidades"],
  ["experiencia", "Experiencia"],
  ["contacto", "Contacto"],
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    for (const [id] of links) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="nav-inner">
          <a
            className="brand"
            href="#inicio"
            aria-label={`${portfolio.name}, inicio`}
            onClick={() => setOpen(false)}
          >
            <span className="brand-mark">
              {portfolio.initials}
              <span>.</span>
            </span>
            <span className="brand-caption">
              PORTAFOLIO
              <br />
              <span>PERSONAL</span>
            </span>
          </a>
          <nav
            aria-label="Navegación principal"
            className={open ? "navigation is-open" : "navigation"}
            id="main-navigation"
          >
            {links.map(([id, label]) => (
              <a
                href={`#${id}`}
                key={id}
                aria-current={active === id ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
                {id === "contacto" && (
                  <ArrowUpRight size={14} aria-hidden="true" />
                )}
              </a>
            ))}
          </nav>
          <button
            ref={toggle}
            type="button"
            className="menu-toggle icon-button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}
