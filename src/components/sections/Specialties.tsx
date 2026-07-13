"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Specialties() {
  const { portfolio, copy } = useLanguage();
  return <section className="section compact" aria-labelledby="specialties-title"><div className="container"><SectionHeading eyebrow={copy.specialtiesEyebrow} title={copy.specialtiesTitle} copy={copy.specialtiesCopy} /><Reveal><div className="specialty-grid">{portfolio.specialties.map((item) => <article className="specialty-card" key={item.title}><span className="specialty-icon">{item.icon}</span><h3>{item.title}</h3><p>{item.description}</p><span className="card-arrow">↗</span></article>)}</div></Reveal></div></section>;
}
