import type { Metadata } from "next";
import localFont from "next/font/local";
import { getSiteUrl } from "@/lib/siteUrl";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const geist = localFont({ src: "./SegoeUI.ttf", variable: "--font-geist", display: "swap" });
const siteUrl = getSiteUrl();
const title = "Jonathan Betancourt | QA Automation Engineer";
const description = "Portafolio de Jonathan Betancourt, QA Automation Engineer especializado en Playwright, API Testing, RPA, CI/CD e inteligencia artificial aplicada a la calidad de software.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Jonathan Betancourt" },
  description,
  alternates: { canonical: "/" },
  authors: [{ name: "Jonathan Stevens Betancourt Romero", url: siteUrl }],
  creator: "Jonathan Stevens Betancourt Romero",
  keywords: [
    "Software Automation Engineer", "QA Automation Engineer", "Ingeniero de Automatización", "RPA Engineer",
    "AI Engineer", "Backend Developer", "Playwright", "API Testing", "Test Automation", "CI/CD",
    "Python", "TypeScript", "Node.js",
  ],
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Portafolio de Jonathan Betancourt",
    type: "website",
    locale: "es_CO",
    images: [{ url: "/images/og-portfolio.png", width: 1200, height: 630, alt: "Jonathan Betancourt - Software Automation, QA Automation, RPA, AI Engineer y Backend" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-portfolio.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={geist.variable}><body><LanguageProvider>{children}</LanguageProvider></body></html>;
}
