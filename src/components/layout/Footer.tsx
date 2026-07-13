"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  const { portfolio } = useLanguage();
  return <footer className="footer"><div className="container footer-inner"><p>© {new Date().getFullYear()} {portfolio.person.shortName}</p><p>{portfolio.footerText}</p><div className="footer-socials">{portfolio.socialLinks.map((link) => <a key={link.label} href={link.href} aria-label={link.label}><SocialIcon href={link.href} /></a>)}</div></div></footer>;
}
