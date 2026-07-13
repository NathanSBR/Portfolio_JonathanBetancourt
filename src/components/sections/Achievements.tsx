"use client";

import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Achievements() {
  const { portfolio, copy } = useLanguage();
  return <section className="section compact"><div className="container"><Reveal><div className="achievement-panel"><div className="achievement-intro"><span className="eyebrow">{copy.impactEyebrow}</span><h2>{copy.impactTitle}</h2></div><div className="achievement-grid">{portfolio.achievements.map((item) => <div className="achievement" key={item.label}><span className="metric-icon">{item.icon}</span><strong><Counter value={item.value} suffix={item.suffix} /></strong><p>{item.label}</p></div>)}</div></div></Reveal></div></section>;
}
