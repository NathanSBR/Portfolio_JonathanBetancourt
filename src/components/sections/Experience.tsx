"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Experience() {
  const { portfolio, copy } = useLanguage();
  return <section className="section" id="experiencia"><div className="container experience-layout"><SectionHeading eyebrow={copy.experienceEyebrow} title={copy.experienceTitle} copy={copy.experienceCopy} /><Reveal><div className="timeline">{portfolio.experience.map((item) => <article className="timeline-item" key={`${item.company}-${item.period}`}><span className="timeline-dot" /><div className="timeline-meta"><span>{item.period}</span><strong>{item.company}</strong><small>{item.location}</small>{item.clients && <small>{copy.clients}: {item.clients.join(copy.clientJoin)}</small>}</div><div className="timeline-content"><h3>{item.role}</h3><p>{item.description}</p><div className="tag-list">{item.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div></article>)}</div></Reveal></div></section>;
}
