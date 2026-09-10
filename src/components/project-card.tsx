"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Code2, Braces } from "lucide-react";
import { type Project, PENDING } from "@/data/portfolio";
import { ExternalLink } from "./ui";
import { assetUrl } from "@/lib/links";
export function ProjectCard({project,index}: {project:Project;index:number}) {
  const reduced = useReducedMotion();
  const source = assetUrl(project.image);
  return <motion.article className={`project-card ${project.featured ? "featured" : ""}`} whileHover={reduced ? undefined : {y:-4,rotateX:1}} transition={{duration:0.25}}>
    <div className="project-cover">
      {source ? <Image src={source} alt={project.imageAlt} fill sizes="(max-width: 767px) 100vw, 50vw"/> : <div className="project-code-cover"><div className="cover-top"><Braces size={19} aria-hidden="true"/><span>{project.name}</span><span className="cover-file">0{index+1}</span></div><div className="code-lines" aria-hidden="true">{project.coverLines.map((line,i)=><span key={i}><i>{String(i+1).padStart(2,"0")}</i><span className={line.startsWith('#')?'code-comment':''}>{line || ' '}</span></span>)}</div><span className="cover-caption">PORTADA CONCEPTUAL · IMAGEN PENDIENTE</span></div>}
    </div>
    <div className="project-body"><div className="project-meta"><span className={`status ${project.status === "En desarrollo" ? "developing" : ""}`}>{project.status === "En desarrollo" && <span/>}{project.status}</span><span className="featured-label">{project.featured ? "DESTACADO" : project.kind}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.technologies.map(tech=><span key={tech}>{tech}</span>)}</div>
    {(project.scope.length>0 || project.roadmap.length>0) && <details className="project-scope"><summary>Desarrollo actual y próximos pasos</summary><div className="scope-columns"><div><h4>Áreas trabajadas</h4><ul>{project.scope.map(item=><li key={item}>{item}</li>)}</ul></div><div><h4>Planes posteriores</h4><ul>{project.roadmap.map(item=><li key={item}>{item}</li>)}</ul></div></div></details>}
    {project.metrics.length>0 && <div className="project-results"><h4>Resultados aproximados</h4><dl className="metric-list">{project.metrics.map(metric=><div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>{project.metricsNote && <p>{project.metricsNote}</p>}</div>}
    {project.date && <p className="project-date">{project.date}</p>}{project.results.length>0 && <ul className="results-list">{project.results.map(result=><li key={result}>{result}</li>)}</ul>}
    <div className="project-links"><ExternalLink href={project.repository} pendingLabel={`Repositorio: ${PENDING}`}><Code2 size={16} aria-hidden="true"/>Repositorio</ExternalLink><ExternalLink href={project.demo} pendingLabel={`Demo: ${PENDING}`}>Ver demo</ExternalLink></div></div>
  </motion.article>;
}
