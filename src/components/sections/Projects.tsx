"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

function ProjectAction({ href, children, label, pending }: { href: string | null; children: React.ReactNode; label: string; pending: string }) {
  return href ? <a href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a> : <span className="project-action-disabled" aria-disabled="true" title={pending}>{children}</span>;
}

export function Projects() {
  const { portfolio, copy } = useLanguage();
  return <section className="section section-tinted" id="proyectos"><div className="container"><SectionHeading eyebrow={copy.projectsEyebrow} title={copy.projectsTitle} copy={copy.projectsCopy} /><Reveal><div className="project-grid">{portfolio.projects.map((project, index) => <article className="project-card" key={project.title}>
    {project.image ? <div className="project-preview project-preview-image"><Image src={project.image} alt={`${copy.projectImageAlt} ${project.title}`} fill sizes="(max-width: 860px) 100vw, 33vw" /></div> : <div className="project-preview" style={{ "--accent": project.accent } as React.CSSProperties}><span>{String(index + 1).padStart(2, "0")}</span><div className="preview-window"><i /><i /><i /><b>{project.category}</b></div></div>}
    <div className="project-content"><small>{project.category}</small><h3>{project.title}</h3><p>{project.description}</p>{(project.problem || project.solution || project.result) && <dl className="project-details">{project.problem && <div><dt>{copy.problem}</dt><dd>{project.problem}</dd></div>}{project.solution && <div><dt>{copy.solution}</dt><dd>{project.solution}</dd></div>}{project.result && <div><dt>{copy.result}</dt><dd>{project.result}</dd></div>}</dl>}{project.technologies.length > 0 && <div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>}<div className="project-actions"><ProjectAction href={project.demoUrl} label={`${copy.viewProject}: ${project.title}`} pending={copy.pendingLink}>{copy.viewProject} <span>↗</span></ProjectAction><ProjectAction href={project.repositoryUrl} label={`${copy.code}: ${project.title}`} pending={copy.pendingLink}>{copy.code} <span>⌘</span></ProjectAction></div></div>
  </article>)}</div></Reveal></div></section>;
}
