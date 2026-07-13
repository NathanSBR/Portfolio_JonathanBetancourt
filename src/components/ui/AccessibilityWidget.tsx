"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiAlignLeft,
  FiBookOpen,
  FiCrosshair,
  FiEye,
  FiImage,
  FiInfo,
  FiLink,
  FiMaximize2,
  FiMove,
  FiMousePointer,
  FiPauseCircle,
  FiRefreshCw,
  FiSliders,
  FiType,
  FiX,
} from "react-icons/fi";
import { MdAccessibilityNew } from "react-icons/md";
import { useLanguage } from "@/i18n/LanguageProvider";

type Setting = "contrast" | "links" | "largeText" | "spacing" | "pause" | "hideImages" | "readableFont" | "cursor" | "tooltips" | "lineHeight" | "align" | "desaturate" | "readingGuide" | "readingMask" | "focus" | "oversized" | "widgetRight";
type Settings = Record<Setting, boolean>;

const defaults: Settings = {
  contrast: false,
  links: false,
  largeText: false,
  spacing: false,
  pause: false,
  hideImages: false,
  readableFont: false,
  cursor: false,
  tooltips: false,
  lineHeight: false,
  align: false,
  desaturate: false,
  readingGuide: false,
  readingMask: false,
  focus: false,
  oversized: false,
  widgetRight: false,
};

const rootClasses: Record<Setting, string> = {
  contrast: "a11y-contrast",
  links: "a11y-links",
  largeText: "a11y-large-text",
  spacing: "a11y-spacing",
  pause: "a11y-pause",
  hideImages: "a11y-hide-images",
  readableFont: "a11y-readable-font",
  cursor: "a11y-cursor",
  tooltips: "a11y-tooltips",
  lineHeight: "a11y-line-height",
  align: "a11y-align",
  desaturate: "a11y-desaturate",
  readingGuide: "a11y-reading-guide",
  readingMask: "a11y-reading-mask",
  focus: "a11y-focus",
  oversized: "a11y-oversized",
  widgetRight: "a11y-widget-right",
};

const labels = {
  es: { title: "Menú de accesibilidad", close: "Cerrar menú", open: "Abrir menú de accesibilidad", contrast: "Contraste alto", links: "Resaltar enlaces", largeText: "Texto más grande", spacing: "Espaciado de texto", pause: "Pausar animaciones", hideImages: "Ocultar imágenes", readableFont: "Fuente legible", cursor: "Cursor visible", tooltips: "Ayudas emergentes", lineHeight: "Altura de línea", align: "Alinear texto", desaturate: "Sin saturación", readingGuide: "Guía de lectura", readingMask: "Máscara de lectura", focus: "Enfoque visible", oversized: "Panel ampliado", widgetRight: "Mover a la derecha", reset: "Restablecer ajustes", shortcut: "Atajo: Alt + A" },
  en: { title: "Accessibility menu", close: "Close menu", open: "Open accessibility menu", contrast: "High contrast", links: "Highlight links", largeText: "Bigger text", spacing: "Text spacing", pause: "Pause animations", hideImages: "Hide images", readableFont: "Readable font", cursor: "Visible cursor", tooltips: "Tooltips", lineHeight: "Line height", align: "Text alignment", desaturate: "Desaturate", readingGuide: "Reading guide", readingMask: "Reading mask", focus: "Visible focus", oversized: "Larger panel", widgetRight: "Move to the right", reset: "Reset settings", shortcut: "Shortcut: Alt + A" },
  de: { title: "Barrierefreiheit", close: "Menü schließen", open: "Menü für Barrierefreiheit öffnen", contrast: "Hoher Kontrast", links: "Links hervorheben", largeText: "Größerer Text", spacing: "Textabstand", pause: "Animationen pausieren", hideImages: "Bilder ausblenden", readableFont: "Lesbare Schrift", cursor: "Sichtbarer Cursor", tooltips: "Hinweise", lineHeight: "Zeilenhöhe", align: "Textausrichtung", desaturate: "Farben reduzieren", readingGuide: "Lesehilfe", readingMask: "Lesemaske", focus: "Sichtbarer Fokus", oversized: "Größeres Menü", widgetRight: "Nach rechts verschieben", reset: "Einstellungen zurücksetzen", shortcut: "Tastenkürzel: Alt + A" },
} as const;

const options: Array<{ key: Setting; icon: React.ComponentType<{ "aria-hidden"?: boolean }> }> = [
  { key: "contrast", icon: FiEye },
  { key: "links", icon: FiLink },
  { key: "largeText", icon: FiType },
  { key: "spacing", icon: FiMaximize2 },
  { key: "pause", icon: FiPauseCircle },
  { key: "hideImages", icon: FiImage },
  { key: "readableFont", icon: FiType },
  { key: "cursor", icon: FiMousePointer },
  { key: "tooltips", icon: FiInfo },
  { key: "lineHeight", icon: FiSliders },
  { key: "align", icon: FiAlignLeft },
  { key: "desaturate", icon: FiEye },
  { key: "readingGuide", icon: FiBookOpen },
  { key: "readingMask", icon: FiBookOpen },
  { key: "focus", icon: FiCrosshair },
];

export function AccessibilityWidget() {
  const { locale } = useLanguage();
  const text = labels[locale];
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(defaults);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-accessibility");
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved) as Partial<Settings>;
      queueMicrotask(() => setSettings({ ...defaults, ...parsed }));
    } catch {
      window.localStorage.removeItem("portfolio-accessibility");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    (Object.keys(rootClasses) as Setting[]).forEach((key) => root.classList.toggle(rootClasses[key], settings[key]));
    window.localStorage.setItem("portfolio-accessibility", JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key.toLowerCase() === "a") {
        event.preventDefault();
        setOpen((current) => !current);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) requestAnimationFrame(() => closeRef.current?.focus());
  }, [open]);

  useEffect(() => {
    if (!settings.readingGuide && !settings.readingMask) return;
    const updatePosition = (event: PointerEvent) => document.documentElement.style.setProperty("--a11y-reading-y", `${event.clientY}px`);
    window.addEventListener("pointermove", updatePosition, { passive: true });
    return () => window.removeEventListener("pointermove", updatePosition);
  }, [settings.readingGuide, settings.readingMask]);

  const toggle = (key: Setting) => setSettings((current) => ({ ...current, [key]: !current[key] }));
  const reset = () => setSettings(defaults);

  return <>
    <button className="accessibility-trigger" type="button" onClick={() => setOpen(true)} aria-label={text.open} aria-expanded={open} aria-controls="accessibility-panel">
      <MdAccessibilityNew aria-hidden="true" />
    </button>
    {open && <div className="accessibility-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
      <section id="accessibility-panel" className="accessibility-panel" role="dialog" aria-modal="true" aria-labelledby="accessibility-title">
        <header>
          <div><strong id="accessibility-title">{text.title}</strong><small>{text.shortcut}</small></div>
          <button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label={text.close}><FiX aria-hidden="true" /></button>
        </header>
        <div className="accessibility-options">
          {options.map(({ key, icon: Icon }) => <button key={key} type="button" className={settings[key] ? "active" : ""} aria-pressed={settings[key]} onClick={() => toggle(key)}>
            <Icon aria-hidden={true} /><span>{text[key]}</span>
          </button>)}
        </div>
        <button className="accessibility-reset" type="button" onClick={reset}><FiRefreshCw aria-hidden="true" />{text.reset}</button>
        <div className="accessibility-position-controls">
          <button type="button" className={settings.oversized ? "active" : ""} aria-pressed={settings.oversized} onClick={() => toggle("oversized")}><FiMaximize2 aria-hidden="true" />{text.oversized}</button>
          <button type="button" className={settings.widgetRight ? "active" : ""} aria-pressed={settings.widgetRight} onClick={() => toggle("widgetRight")}><FiMove aria-hidden="true" />{text.widgetRight}</button>
        </div>
      </section>
    </div>}
  </>;
}
