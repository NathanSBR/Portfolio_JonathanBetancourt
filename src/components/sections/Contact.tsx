"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const { portfolio, copy } = useLanguage();
  const { person, socialLinks, contact } = portfolio;
  return <section className="section contact-section" id="contacto"><div className="container"><Reveal><div className="contact-card"><div className="contact-copy"><span className="eyebrow">{copy.contactEyebrow}</span><h2>{contact.title}</h2><p>{contact.description}</p><dl><div><dt>{copy.email}</dt><dd><a href={`mailto:${person.email}`}>{person.email}</a></dd></div><div><dt>{copy.location}</dt><dd>{person.location}</dd></div>{person.availability && <div><dt>{copy.availability}</dt><dd><i />{person.availability}</dd></div>}</dl><div className="contact-socials">{socialLinks.slice(0, 2).map((link) => <a key={link.label} href={link.href}>{link.label} <span>↗</span></a>)}</div></div><ContactForm /></div></Reveal></div></section>;
}
