"use client";

import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Specialties } from "@/components/sections/Specialties";
import { Stack } from "@/components/sections/Stack";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BackToTop } from "@/components/ui/BackToTop";
import { AccessibilityWidget } from "@/components/ui/AccessibilityWidget";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Home() {
  const { copy } = useLanguage();
  return <>
    <a className="skip-link" href="#main-content">{copy.skip}</a>
    <Navbar />
    <main id="main-content"><Hero /><Specialties /><Achievements /><Projects /><Experience /><Stack /><About /><Contact /></main>
    <Footer />
    <AccessibilityWidget />
    <BackToTop />
  </>;
}
