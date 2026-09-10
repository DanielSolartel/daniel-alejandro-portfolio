import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Cpu,
  Database,
  GraduationCap,
  Layers,
  Sparkles,
  Terminal,
  Users,
  BriefcaseBusiness,
} from "lucide-react";
import { portfolio, PENDING, type TimelineEntry } from "@/data/portfolio";
import { Navigation } from "@/components/navigation";
import { DigitalCore } from "@/components/digital-core";
import { SectionTitle, SocialLinks, CvButton } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";
import { CertificateGallery } from "@/components/certificate-gallery";
import { ContactActions } from "@/components/contact-actions";
const skillIcons = [Braces, Layers, Terminal, Database, Cpu, Users];
function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="timeline">
      {entries.map((entry) => (
        <li key={entry.id}>
          <div className="timeline-dot" />
          <p className="timeline-date">
            {entry.status}
            {entry.startDate && ` · ${entry.startDate}`}
            {entry.endDate && ` — ${entry.endDate}`}
          </p>
          <h4>{entry.title}</h4>
          <p className="timeline-organization">{entry.organization}</p>
          <p>{entry.description}</p>
          {entry.highlights.length > 0 && (
            <ul>
              {entry.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <div className="tags">
            {entry.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
export default function Home() {
  return (
    <>
      <Navigation />
      <main id="contenido">
        <section id="inicio" className="hero section-shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="small-line" /> CÓDIGO, IDEAS Y POSIBILIDADES
              </p>
              <h1>
                <span>{portfolio.displayName}</span>
                <span className="surname">
                  {portfolio.surname}
                  <span className="name-dot">.</span>
                </span>
              </h1>
              <div className="role-line">
                <span className="role-label">PERFIL PROFESIONAL</span>
                <span>{portfolio.role}</span>
              </div>
              <p className="hero-description">{portfolio.headline}</p>
              <div className="hero-actions">
                <a href="#proyectos" className="button primary">
                  Ver proyectos
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
                <CvButton secondary />
              </div>
              <SocialLinks />
            </div>
            <DigitalCore />
          </div>
          <div className="hero-foot">
            <a href="#sobre-mi">
              <span className="scroll-icon">
                <ArrowDown size={15} aria-hidden="true" />
              </span>
              Un poco más sobre mí
            </a>
            <span className="hero-foot-note">
              TECNOLOGÍA CON PROPÓSITO
              <ArrowDownRight size={19} aria-hidden="true" />
            </span>
          </div>
        </section>
        <div className="interest-strip" aria-label="Intereses tecnológicos">
          <div className="section-shell">
            {portfolio.featuredInterests.map((interest, i) => (
              <span key={interest}>
                {i > 0 && (
                  <span className="strip-star" aria-hidden="true">
                    ✳
                  </span>
                )}
                {interest}
              </span>
            ))}
          </div>
        </div>
        <section
          id="sobre-mi"
          className="section-shell section-block about-section"
        >
          <SectionTitle
            number="01"
            eyebrow="SOBRE MÍ"
            title="Detrás del código."
          />
          <div className="about-grid">
            <div className="about-intro">
              <p className="about-statement">{portfolio.aboutStatement}<br/><span>{portfolio.aboutAccent}</span></p>
              <p className="profile-biography">{portfolio.biography}</p>
              <p className="profile-facts">De {portfolio.origin} · {portfolio.ageAtUpdate} años al actualizar este perfil.</p>
              <p className="profile-facts">{portfolio.personalNote}</p>
              <div className="interest-tags profile-languages" aria-label="Idiomas">{portfolio.languages.map(language => <span key={language}>{language}</span>)}</div>
            </div>
            <div className="about-details">
              <div className="about-detail">
                <span className="detail-index">01 /</span>
                <div>
                  <h3>Lo que me mueve</h3>
                  <div className="interest-tags">
                    {portfolio.interests.map((interest) => (
                      <span key={interest}>{interest}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="about-detail">
                <span className="detail-index">02 /</span>
                <div>
                  <h3>Hacia dónde voy</h3>
                  <p>{portfolio.objectives}</p>
                </div>
              </div>
              {portfolio.location && (
                <div className="about-detail">
                  <span className="detail-index">03 /</span>
                  <div>
                    <h3>Ubicación</h3>
                    <p>{portfolio.location}</p>
                  </div>
                </div>
              )}
              {portfolio.availability && (
                <div className="about-detail">
                  <span className="detail-index">04 /</span>
                  <div>
                    <h3>Disponibilidad</h3>
                    <p>{portfolio.availability}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <aside className="research-panel" aria-labelledby="research-title"><div><p className="eyebrow">{portfolio.research.status}</p><h3 id="research-title">{portfolio.research.title}</h3></div><p>{portfolio.research.description}</p></aside>
        </section>
        <section
          id="proyectos"
          className="section-shell section-block projects-section"
        >
          <SectionTitle
            number="02"
            eyebrow="PROYECTOS"
            title="Del concepto al código."
            description="Proyectos, procesos y nuevas ideas en construcción."
          />
          <div className="project-grid">
            {portfolio.projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="future-ideas"><h3>Próximas ideas</h3>{portfolio.futureIdeas.map(idea => <p key={idea.name}><strong>{idea.name}</strong> — {idea.description}</p>)}</div>
        </section>
        <section id="certificados" className="section-shell section-block">
          <SectionTitle
            number="03"
            eyebrow="CERTIFICADOS"
            title="Aprender. Crear. Evolucionar."
            description="Formación en Java y Spring Boot mediante Oracle Next Education."
          />
          <CertificateGallery />
        </section>
        <section id="habilidades" className="skills-section">
          <div className="section-shell section-block">
            <SectionTitle
              number="04"
              eyebrow="HABILIDADES"
              title="Mi caja de herramientas."
              description="Tecnologías con las que he trabajado en proyectos académicos y personales."
            />
            <div className="skills-grid">
              {portfolio.skills.map((group, i) => {
                const Icon = skillIcons[i % skillIcons.length];
                return (
                  <article key={group.name} className="skill-card">
                    <Icon size={23} strokeWidth={1.3} aria-hidden="true" />
                    <h3>{group.name}</h3>
                    {group.items.length ? (
                      <div className="tags">
                        {group.items.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    ) : (
                      <p>{PENDING}</p>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section id="experiencia" className="section-shell section-block">
          <SectionTitle
            number="05"
            eyebrow="TRAYECTORIA"
            title="Cada paso cuenta."
          />
          <div className="timeline-grid">
            <div className="timeline-column">
              <h3>
                <BriefcaseBusiness size={22} aria-hidden="true" />
                Experiencia práctica
              </h3>
              <Timeline entries={portfolio.experience} />
            </div>
            <div className="timeline-column">
              <h3>
                <GraduationCap size={24} aria-hidden="true" />
                Educación
              </h3>
              <Timeline entries={portfolio.education} />
            </div>
          </div>
        </section>
        <section id="contacto" className="section-shell contact-section">
          <div className="contact-box">
            <div className="contact-copy">
              <p className="eyebrow">
                <span>06</span> CONTACTO
              </p>
              <h2>
                ¿Y si creamos
                <br />
                algo <span>juntos?</span>
                <Sparkles size={30} strokeWidth={1} aria-hidden="true" />
              </h2>
              <p>{portfolio.contact.message}</p>
            </div>
            <div className="contact-details">
              <ContactActions />
              <SocialLinks />
              <div className="contact-bottom">
                <CvButton secondary />
                <ArrowRight
                  className="contact-arrow"
                  size={31}
                  strokeWidth={1}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-shell">
        <div>
          <a className="footer-brand" href="#inicio">
            {portfolio.initials}
            <span>.</span>
          </a>
          <p>
            © {new Date().getFullYear()} {portfolio.name}
          </p>
        </div>
        <p>Construido con código y curiosidad.</p>
        <SocialLinks compact />
      </footer>
    </>
  );
}
