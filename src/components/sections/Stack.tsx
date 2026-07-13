"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnologyIcon } from "@/components/ui/TechnologyIcon";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Stack() {
  const { portfolio, copy } = useLanguage();
  return <section className="section section-tinted" id="stack"><div className="container"><SectionHeading eyebrow={copy.stackEyebrow} title={copy.stackTitle} copy={copy.stackCopy} /><Reveal><div className="tech-grid">{portfolio.technologies.map((tech) => <div className="tech-card" key={tech.name}><TechnologyIcon name={tech.name} color={tech.color} /><strong>{tech.name}</strong></div>)}</div></Reveal></div></section>;
}
