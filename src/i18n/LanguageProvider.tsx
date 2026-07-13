"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { languageOptions, portfolios, uiCopy, type Locale, type UiCopy } from "./translations";
import type { PortfolioData } from "@/types/portfolio";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  portfolio: PortfolioData;
  copy: UiCopy;
  languages: typeof languageOptions;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language");
    if (saved === "es" || saved === "en" || saved === "de") queueMicrotask(() => setLocaleState(saved));
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("portfolio-language", locale);
  }, [locale]);

  const portfolio = useMemo(() => portfolios[locale], [locale]);
  const value = useMemo(() => ({ locale, setLocale: setLocaleState, portfolio, copy: uiCopy[locale], languages: languageOptions }), [locale, portfolio]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
