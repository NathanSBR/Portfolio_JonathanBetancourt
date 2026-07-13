"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { DE, ES, GB } from "country-flag-icons/react/3x2";
import { FiMoon, FiSun } from "react-icons/fi";

const flagIcons = { es: ES, en: GB, de: DE };
const themeLabels = {
  es: { dark: "Activar modo oscuro", light: "Activar modo claro" },
  en: { dark: "Enable dark mode", light: "Enable light mode" },
  de: { dark: "Dunkelmodus aktivieren", light: "Hellmodus aktivieren" },
} as const;

export function Navbar() {
  const { locale, setLocale, portfolio, copy, languages } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  const languageMenu = useRef<HTMLDetailsElement>(null);
  const currentLanguage = languages.find((language) => language.locale === locale) ?? languages[0];
  const CurrentFlag = flagIcons[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const sections = portfolio.navigation.map((item) => document.getElementById(item.href.slice(1))).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: "-28% 0px -62%", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, [portfolio.navigation]);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const preferred = saved === "dark" || saved === "light" ? saved : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    queueMicrotask(() => setTheme(preferred));
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.classList.toggle("theme-dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function selectLanguage(nextLocale: typeof locale) {
    setLocale(nextLocale);
    if (languageMenu.current) languageMenu.current.open = false;
  }

  return <header className={`navbar ${scrolled ? "scrolled" : ""}`}><div className="nav-inner">
    <a className="brand" href="#inicio" aria-label={copy.goHome}><span>{portfolio.person.initials}</span><b>{portfolio.person.shortName}</b></a>
    <nav id="mobile-menu" className={open ? "nav-links open" : "nav-links"} aria-label={copy.navigation}>{portfolio.navigation.map((item) => <a key={item.href} href={item.href} className={active === item.href.slice(1) ? "active" : ""} aria-current={active === item.href.slice(1) ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</a>)}</nav>
    <details className="language-menu" ref={languageMenu}><summary aria-label={copy.viewLanguages}><CurrentFlag className="flag-icon" aria-hidden="true" /><small>{currentLanguage.code}</small><i aria-hidden="true">⌄</i></summary><div className="language-options" role="group" aria-label={copy.languages}><strong>{copy.languages}</strong>{languages.map((language) => { const Flag = flagIcons[language.locale]; return <button type="button" key={language.locale} className={language.locale === locale ? "language-option active" : "language-option"} aria-pressed={language.locale === locale} onClick={() => selectLanguage(language.locale)}><Flag className="flag-icon" aria-hidden="true" /><span>{language.label}<small>{language.code}</small></span>{language.locale === locale && <i aria-hidden="true">✓</i>}</button>; })}</div></details>
    {portfolio.person.cvUrl ? <a className="button button-dark cv-nav" href={portfolio.person.cvUrl} download>{copy.downloadCv} <span aria-hidden="true">↓</span></a> : <span className="button button-dark cv-nav button-disabled" aria-disabled="true" title={copy.cvPending}>{copy.downloadCv}</span>}
    <button className="theme-toggle" type="button" onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")} aria-label={theme === "dark" ? themeLabels[locale].light : themeLabels[locale].dark} title={theme === "dark" ? themeLabels[locale].light : themeLabels[locale].dark}>{theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}</button>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? copy.closeMenu : copy.openMenu}><span /><span /><span /></button>
  </div></header>;
}
