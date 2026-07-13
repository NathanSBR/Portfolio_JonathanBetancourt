"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";

export function About() {
  const { portfolio, copy } = useLanguage();
  return <section className="section" id="sobre-mi"><div className="container"><Reveal><div className="about-card">
    <div><span className="eyebrow">{copy.aboutEyebrow}</span><h2>{portfolio.about.title}</h2><p>{portfolio.about.summary}</p>{portfolio.person.cvUrl ? <a className="button button-dark" href={portfolio.person.cvUrl} download>{copy.downloadCv} <span>↓</span></a> : <span className="button button-dark button-disabled" aria-disabled="true" title={copy.cvPending}>{copy.downloadCv}</span>}</div>
    <div><div className="about-values">{portfolio.about.values.map((value, index) => <article key={value.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{value.title}</h3><p>{value.description}</p></article>)}</div><div className="about-credentials"><article><span className="credential-label">{copy.education}</span><strong>{portfolio.about.education.degree}</strong><p>{portfolio.about.education.institution} · {portfolio.about.education.period}</p></article><article><span className="credential-label">{copy.languageSkills}</span><div className="language-list">{portfolio.about.languages.map((language) => <span key={language.name}>{language.name} <b>{language.level}</b></span>)}</div></article></div></div>
  </div></Reveal></div></section>;
}
