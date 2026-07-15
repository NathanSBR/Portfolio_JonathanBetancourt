import { portfolio as esPortfolio } from "@/data/portfolio";
import type { PortfolioData } from "@/types/portfolio";

export type Locale = "es" | "en" | "de";

export type UiCopy = {
  skip: string; goHome: string; navigation: string; openMenu: string; closeMenu: string;
  viewLanguages: string; languages: string; currentLanguage: string; downloadCv: string; cvPending: string;
  hello: string; viewProjects: string; contact: string; followMe: string; portraitAlt: string;
  specialtiesEyebrow: string; specialtiesTitle: string; specialtiesCopy: string;
  impactEyebrow: string; impactTitle: string;
  projectsEyebrow: string; projectsTitle: string; projectsCopy: string; problem: string; solution: string; result: string;
  viewProject: string; code: string; pendingLink: string; projectImageAlt: string;
  experienceEyebrow: string; experienceTitle: string; experienceCopy: string; clients: string; clientJoin: string;
  stackEyebrow: string; stackTitle: string; stackCopy: string;
  aboutEyebrow: string; education: string; languageSkills: string;
  contactEyebrow: string; email: string; location: string; availability: string;
  name: string; namePlaceholder: string; emailPlaceholder: string;
  message: string; messagePlaceholder: string; validateForm: string; validating: string;
  nameError: string; emailError: string; messageError: string; validationSuccess: string; validationError: string; sendError: string; formConfigPending: string;
  backToTop: string;
};

export const languageOptions = [
  { locale: "es" as const, code: "ES", flag: "🇪🇸", label: "Español" },
  { locale: "en" as const, code: "EN", flag: "🇬🇧", label: "English" },
  { locale: "de" as const, code: "DE", flag: "🇩🇪", label: "Deutsch" },
];

export const uiCopy: Record<Locale, UiCopy> = {
  es: {
    skip: "Saltar al contenido", goHome: "Ir al inicio", navigation: "Navegación principal", openMenu: "Abrir menú", closeMenu: "Cerrar menú",
    viewLanguages: "Cambiar idioma", languages: "Idioma", currentLanguage: "idioma actual", downloadCv: "Descargar CV", cvPending: "Ruta del CV pendiente de configurar",
    hello: "Hola, soy", viewProjects: "Ver proyectos", contact: "Contactar", followMe: "Sígueme en", portraitAlt: "Jonathan Betancourt, QA Automation Engineer especializado en automatización de software, RPA, inteligencia artificial y backend",
    specialtiesEyebrow: "Lo que hago", specialtiesTitle: "Especialidades que conectan negocio y tecnología", specialtiesCopy: "De la idea al producto, con foco en calidad, eficiencia y resultados medibles.",
    impactEyebrow: "Impacto", impactTitle: "Resultados que hablan",
    projectsEyebrow: "Proyectos", projectsTitle: "Proyectos seleccionados", projectsCopy: "Soluciones verificables y proyectos en desarrollo que conectan automatización, calidad de software y tecnología.", problem: "Problema", solution: "Solución", result: "Resultado",
    viewProject: "Ver proyecto", code: "Código", pendingLink: "Enlace pendiente de configurar", projectImageAlt: "Vista previa de",
    experienceEyebrow: "Trayectoria", experienceTitle: "Experiencia profesional", experienceCopy: "Automatización, calidad de software y análisis de datos con resultados medibles.", clients: "Clientes", clientJoin: " y ",
    stackEyebrow: "Herramientas", stackTitle: "Stack tecnológico", stackCopy: "Tecnologías modernas para construir, automatizar y desplegar productos confiables.",
    aboutEyebrow: "Conóceme", education: "Educación", languageSkills: "Idiomas",
    contactEyebrow: "Contacto", email: "Correo", location: "Ubicación", availability: "Disponibilidad",
    name: "Nombre", namePlaceholder: "Tu nombre", emailPlaceholder: "tu@correo.com",
    message: "Mensaje", messagePlaceholder: "Cuéntame sobre tu proyecto o idea", validateForm: "Enviar mensaje", validating: "Enviando…",
    nameError: "Escribe un nombre de al menos 2 caracteres.", emailError: "Escribe un correo válido.", messageError: "El mensaje debe tener al menos 10 caracteres.", validationSuccess: "Mensaje enviado correctamente. Te responderé pronto.", validationError: "Revisa los campos indicados.", sendError: "No fue posible enviar el mensaje. Inténtalo nuevamente.", formConfigPending: "El envío está preparado, pero falta configurar la clave gratuita de Web3Forms.",
    backToTop: "Volver arriba",
  },
  en: {
    skip: "Skip to content", goHome: "Go to home", navigation: "Main navigation", openMenu: "Open menu", closeMenu: "Close menu",
    viewLanguages: "Change language", languages: "Language", currentLanguage: "current language", downloadCv: "Download CV", cvPending: "CV path pending configuration",
    hello: "Hi, I’m", viewProjects: "View projects", contact: "Contact me", followMe: "Find me on", portraitAlt: "Jonathan Betancourt, QA Automation Engineer specializing in software automation, RPA, artificial intelligence and backend development",
    specialtiesEyebrow: "What I do", specialtiesTitle: "Specialties connecting business and technology", specialtiesCopy: "From idea to product, with a focus on quality, efficiency and measurable results.",
    impactEyebrow: "Impact", impactTitle: "Results that speak",
    projectsEyebrow: "Projects", projectsTitle: "Selected projects", projectsCopy: "Verifiable solutions and projects in development connecting automation, software quality and technology.", problem: "Problem", solution: "Solution", result: "Result",
    viewProject: "View project", code: "Code", pendingLink: "Link pending configuration", projectImageAlt: "Preview of",
    experienceEyebrow: "Career", experienceTitle: "Professional experience", experienceCopy: "Automation, software quality and data analysis with measurable results.", clients: "Clients", clientJoin: " and ",
    stackEyebrow: "Tools", stackTitle: "Technology stack", stackCopy: "Modern technologies to build, automate and deploy reliable products.",
    aboutEyebrow: "About me", education: "Education", languageSkills: "Languages",
    contactEyebrow: "Contact", email: "Email", location: "Location", availability: "Availability",
    name: "Name", namePlaceholder: "Your name", emailPlaceholder: "you@email.com",
    message: "Message", messagePlaceholder: "Tell me about your project or idea", validateForm: "Send message", validating: "Sending…",
    nameError: "Enter a name with at least 2 characters.", emailError: "Enter a valid email address.", messageError: "The message must contain at least 10 characters.", validationSuccess: "Message sent successfully. I will reply soon.", validationError: "Review the highlighted fields.", sendError: "The message could not be sent. Please try again.", formConfigPending: "Sending is ready, but the free Web3Forms access key still needs to be configured.",
    backToTop: "Back to top",
  },
  de: {
    skip: "Zum Inhalt springen", goHome: "Zur Startseite", navigation: "Hauptnavigation", openMenu: "Menü öffnen", closeMenu: "Menü schließen",
    viewLanguages: "Sprache ändern", languages: "Sprache", currentLanguage: "aktuelle Sprache", downloadCv: "Lebenslauf herunterladen", cvPending: "Pfad zum Lebenslauf noch nicht konfiguriert",
    hello: "Hallo, ich bin", viewProjects: "Projekte ansehen", contact: "Kontakt", followMe: "Meine Profile", portraitAlt: "Jonathan Betancourt, QA Automation Engineer mit Schwerpunkt Softwareautomatisierung, RPA, künstliche Intelligenz und Backend-Entwicklung",
    specialtiesEyebrow: "Was ich mache", specialtiesTitle: "Spezialisierungen zwischen Business und Technologie", specialtiesCopy: "Von der Idee zum Produkt – mit Fokus auf Qualität, Effizienz und messbare Ergebnisse.",
    impactEyebrow: "Wirkung", impactTitle: "Ergebnisse, die überzeugen",
    projectsEyebrow: "Projekte", projectsTitle: "Ausgewählte Projekte", projectsCopy: "Nachvollziehbare Lösungen und Projekte in Entwicklung, die Automatisierung, Softwarequalität und Technologie verbinden.", problem: "Problem", solution: "Lösung", result: "Ergebnis",
    viewProject: "Projekt ansehen", code: "Code", pendingLink: "Link noch nicht konfiguriert", projectImageAlt: "Vorschau von",
    experienceEyebrow: "Werdegang", experienceTitle: "Berufserfahrung", experienceCopy: "Automatisierung, Softwarequalität und Datenanalyse mit messbaren Ergebnissen.", clients: "Kunden", clientJoin: " und ",
    stackEyebrow: "Werkzeuge", stackTitle: "Technologie-Stack", stackCopy: "Moderne Technologien für zuverlässige Produkte, Automatisierung und Deployment.",
    aboutEyebrow: "Über mich", education: "Ausbildung", languageSkills: "Sprachen",
    contactEyebrow: "Kontakt", email: "E-Mail", location: "Standort", availability: "Verfügbarkeit",
    name: "Name", namePlaceholder: "Dein Name", emailPlaceholder: "du@email.de",
    message: "Nachricht", messagePlaceholder: "Erzähle mir von deinem Projekt oder deiner Idee", validateForm: "Nachricht senden", validating: "Wird gesendet…",
    nameError: "Gib einen Namen mit mindestens 2 Zeichen ein.", emailError: "Gib eine gültige E-Mail-Adresse ein.", messageError: "Die Nachricht muss mindestens 10 Zeichen enthalten.", validationSuccess: "Nachricht erfolgreich gesendet. Ich antworte bald.", validationError: "Bitte prüfe die markierten Felder.", sendError: "Die Nachricht konnte nicht gesendet werden. Bitte versuche es erneut.", formConfigPending: "Der Versand ist vorbereitet, aber der kostenlose Web3Forms-Schlüssel muss noch konfiguriert werden.",
    backToTop: "Nach oben",
  },
};

const enPortfolio: PortfolioData = {
  ...esPortfolio,
  person: {
    ...esPortfolio.person,
    description: "Computer Engineer specializing in software automation, QA Automation, RPA, API testing, applied artificial intelligence and backend development.",
    cvUrl: "/cv/Resume-Jonathan-Betancourt-Software-Automation-Engineer.pdf",
  },
  about: {
    ...esPortfolio.about,
    title: "Software automation through quality and engineering",
    summary: "I am a Computer Engineer and QA Automation Engineer focused on software automation. I combine QA Automation, RPA, API testing, applied artificial intelligence and backend development to reduce repetitive work, detect defects early and build reliable solutions. QA Automation is my primary profile, supported by these complementary specialties.",
    values: [
      { title: "Specialties", description: "Software Automation, QA Automation, RPA Engineering, applied AI, API Testing and backend development." },
      { title: "How I work", description: "I analyze risks and critical flows first, design maintainable solutions, automate incrementally and validate results through metrics." },
      { title: "Approach", description: "Early quality, collaboration with development and business, clear documentation and continuous improvement." },
    ],
    education: { ...esPortfolio.about.education, degree: "Computer Engineering" },
    languages: [
      { name: "Spanish", level: "Native", code: "ES", flag: "🇪🇸", active: false },
      { name: "English", level: "B2", code: "EN", flag: "🇬🇧", active: true },
      { name: "German", level: "A1", code: "DE", flag: "🇩🇪", active: false },
    ],
  },
  contact: { title: "Let’s talk about software automation", description: "I am open to opportunities and projects involving QA Automation, RPA, API testing, applied artificial intelligence, CI/CD and backend development." },
  footerText: "Built with Next.js · Software Automation, QA, RPA, AI Engineer and Backend",
  navigation: [
    { label: "Home", href: "#inicio" }, { label: "About", href: "#sobre-mi" }, { label: "Projects", href: "#proyectos" },
    { label: "Experience", href: "#experiencia" }, { label: "Stack", href: "#stack" }, { label: "Contact", href: "#contacto" },
  ],
  socialLinks: esPortfolio.socialLinks.map((link) => link.label === "Correo" ? { ...link, label: "Email" } : link),
  specialties: [
    { icon: "SA", title: "Software Automation Engineer", description: "Maintainable automation solutions that optimize processes, reduce repetitive work and improve software reliability." },
    { icon: "QA", title: "QA Automation", description: "End-to-end, functional and regression automation with Playwright, Cypress and Serenity BDD, integrated into CI/CD workflows." },
    { icon: "RPA", title: "RPA", description: "Quality strategies for RPA processes, defect management and release certification with measurable results." },
    { icon: "AI", title: "AI Engineer", description: "Prompt engineering and language models applied to automation, analysis and intelligent solution development." },
    { icon: "BE", title: "Backend", description: "REST API and data development and validation with Python, TypeScript, Node.js, Postman, SoapUI and SQL." },
  ],
  achievements: [
    { value: 50, suffix: "+", label: "Automated E2E flows", icon: "✓" },
    { value: 30, suffix: "%", label: "Up to 30% less regression time", icon: "◷" },
    { value: 90, suffix: "%", label: "Nearly 90% approval in RPA certifications", icon: "◎" },
    { value: 70, suffix: "%", label: "Over 70% less report-generation time", icon: "↗" },
  ],
  projects: [
    {
      ...esPortfolio.projects[0],
      title: "QA Report Automation",
      category: "QA Automation · Reporting",
      description: "A web application that turns QA execution results into verified metrics, traceable analysis and professional editable Word reports.",
      problem: "Scattered test results make it difficult to identify risks and prepare consistent reports.",
      solution: "It validates CSV files, calculates deterministic metrics and builds professional section-based reports with DOCX export.",
      result: "It automates the workflow from execution evidence to a reviewable Word report, including traceability and an advisory release recommendation.",
      technologies: ["Next.js", "TypeScript", "Vitest", "Playwright", "DOCX", "Optional Ollama"],
    },
    { ...esPortfolio.projects[1], title: "Business management API", category: "In development", description: "Currently in development. Progress updates, a live demo and source code will be published soon." },
    { ...esPortfolio.projects[2], title: "Artificial intelligence web platform", category: "In development", description: "Currently in development. Progress updates, a live demo and source code will be published soon." },
  ],
  experience: [
    { ...esPortfolio.experience[0], role: "QA Automation Analyst", period: "October 2025 – April 2026", description: "I automated more than 50 E2E test flows with Playwright and Serenity BDD, reducing regression time per sprint by up to 30%. I designed functional, regression and E2E tests, validated REST APIs with Postman and SoapUI, queried data with SQL and managed defects in Jira and Azure DevOps. I also led testing strategies for RPA certification cycles with an approval rate close to 90%." },
    { ...esPortfolio.experience[1], role: "Data Analyst — Professional Internship", period: "February 2025 – August 2025", description: "I automated executive Power BI dashboard updates every 30 minutes and reduced report-generation time by more than 70% using Excel and SQL. I built DAX indicators, consolidated multiple data sources and supported executive decisions through analysis and visualization." },
    { ...esPortfolio.experience[2], role: "Content Moderator", period: "March 2023 – January 2024", description: "I analyzed digital content using quality policies and criteria, monitored productivity and quality indicators, and identified incidents for escalation and resolution with multidisciplinary teams." },
  ],
};

const dePortfolio: PortfolioData = {
  ...esPortfolio,
  person: {
    ...esPortfolio.person,
    description: "Informatikingenieur mit Spezialisierung auf Softwareautomatisierung, QA-Automatisierung, RPA, API-Tests, angewandte künstliche Intelligenz und Backend-Entwicklung.",
    cvUrl: "/cv/Resume-Jonathan-Betancourt-Software-Automation-Engineer.pdf",
  },
  about: {
    ...esPortfolio.about,
    title: "Softwareautomatisierung durch Qualität und Engineering",
    summary: "Ich bin Informatikingenieur und QA Automation Engineer mit Fokus auf Softwareautomatisierung. Ich verbinde QA-Automatisierung, RPA, API-Tests, angewandte künstliche Intelligenz und Backend-Entwicklung, um repetitive Aufgaben zu reduzieren, Fehler früh zu erkennen und zuverlässige Lösungen zu entwickeln. QA Automation ist dabei mein Hauptprofil.",
    values: [
      { title: "Spezialisierungen", description: "Software Automation, QA Automation, RPA Engineering, angewandte KI, API Testing und Backend-Entwicklung." },
      { title: "Arbeitsweise", description: "Ich analysiere zuerst Risiken und kritische Abläufe, entwickle wartbare Lösungen, automatisiere schrittweise und prüfe Ergebnisse anhand von Kennzahlen." },
      { title: "Ansatz", description: "Frühe Qualitätssicherung, Zusammenarbeit mit Entwicklung und Business, klare Dokumentation und kontinuierliche Verbesserung." },
    ],
    education: { ...esPortfolio.about.education, degree: "Informatikingenieurwesen" },
    languages: [
      { name: "Spanisch", level: "Muttersprache", code: "ES", flag: "🇪🇸", active: false },
      { name: "Englisch", level: "B2", code: "EN", flag: "🇬🇧", active: false },
      { name: "Deutsch", level: "A1", code: "DE", flag: "🇩🇪", active: true },
    ],
  },
  contact: { title: "Lassen Sie uns über Softwareautomatisierung sprechen", description: "Ich bin offen für Möglichkeiten und Projekte in QA Automation, RPA, API-Tests, angewandter künstlicher Intelligenz, CI/CD und Backend-Entwicklung." },
  footerText: "Entwickelt mit Next.js · Software Automation, QA, RPA, AI Engineer und Backend",
  navigation: [
    { label: "Start", href: "#inicio" }, { label: "Über mich", href: "#sobre-mi" }, { label: "Projekte", href: "#proyectos" },
    { label: "Erfahrung", href: "#experiencia" }, { label: "Stack", href: "#stack" }, { label: "Kontakt", href: "#contacto" },
  ],
  socialLinks: esPortfolio.socialLinks.map((link) => link.label === "Correo" ? { ...link, label: "E-Mail" } : link),
  specialties: [
    { icon: "SA", title: "Software Automation Engineer", description: "Wartbare Automatisierungslösungen zur Prozessoptimierung, Reduzierung repetitiver Aufgaben und Verbesserung der Softwarezuverlässigkeit." },
    { icon: "QA", title: "QA Automation", description: "End-to-End-, Funktions- und Regressionstests mit Playwright, Cypress und Serenity BDD, integriert in CI/CD-Prozesse." },
    { icon: "RPA", title: "RPA", description: "Qualitätsstrategien für RPA-Prozesse, Fehlermanagement und Release-Zertifizierung mit messbaren Ergebnissen." },
    { icon: "AI", title: "AI Engineer", description: "Prompt Engineering und Sprachmodelle für Automatisierung, Analyse und die Entwicklung intelligenter Lösungen." },
    { icon: "BE", title: "Backend", description: "Entwicklung und Validierung von REST-APIs und Daten mit Python, TypeScript, Node.js, Postman, SoapUI und SQL." },
  ],
  achievements: [
    { value: 50, suffix: "+", label: "Automatisierte E2E-Abläufe", icon: "✓" },
    { value: 30, suffix: "%", label: "Bis zu 30% weniger Regressionszeit", icon: "◷" },
    { value: 90, suffix: "%", label: "Nahezu 90% Freigabe bei RPA-Zertifizierungen", icon: "◎" },
    { value: 70, suffix: "%", label: "Über 70% weniger Zeit für Berichte", icon: "↗" },
  ],
  projects: [
    {
      ...esPortfolio.projects[0],
      title: "QA Report Automation",
      category: "QA-Automatisierung · Reporting",
      description: "Eine Webanwendung, die QA-Ausführungsergebnisse in geprüfte Kennzahlen, nachvollziehbare Analysen und professionell bearbeitbare Word-Berichte umwandelt.",
      problem: "Verteilte Testergebnisse erschweren die Risikoerkennung und die Erstellung konsistenter Berichte.",
      solution: "Die Anwendung validiert CSV-Dateien, berechnet deterministische Kennzahlen und erstellt professionelle Berichte mit DOCX-Export.",
      result: "Sie automatisiert den Ablauf vom Ausführungsnachweis bis zum prüfbaren Word-Bericht mit Rückverfolgbarkeit und Freigabeempfehlung.",
      technologies: ["Next.js", "TypeScript", "Vitest", "Playwright", "DOCX", "Ollama optional"],
    },
    { ...esPortfolio.projects[1], title: "API für Unternehmensverwaltung", category: "In Entwicklung", description: "Derzeit in Entwicklung. Fortschritte, Live-Demo und Quellcode werden demnächst veröffentlicht." },
    { ...esPortfolio.projects[2], title: "Webplattform mit künstlicher Intelligenz", category: "In Entwicklung", description: "Derzeit in Entwicklung. Fortschritte, Live-Demo und Quellcode werden demnächst veröffentlicht." },
  ],
  experience: [
    { ...esPortfolio.experience[0], role: "QA-Automatisierungsanalyst", period: "Oktober 2025 – April 2026", description: "Ich automatisierte mehr als 50 E2E-Testabläufe mit Playwright und Serenity BDD und reduzierte die Regressionszeit pro Sprint um bis zu 30%. Ich entwickelte Funktions-, Regressions- und E2E-Tests, validierte REST-APIs mit Postman und SoapUI, führte SQL-Abfragen durch und verwaltete Fehler in Jira und Azure DevOps. Außerdem leitete ich Teststrategien für RPA-Zertifizierungszyklen mit einer Freigabequote von fast 90%." },
    { ...esPortfolio.experience[1], role: "Datenanalyst — Berufspraktikum", period: "Februar 2025 – August 2025", description: "Ich automatisierte die Aktualisierung von Power-BI-Dashboards im 30-Minuten-Takt und reduzierte die Zeit für die Berichtserstellung mit Excel und SQL um mehr als 70%. Ich entwickelte DAX-Kennzahlen, konsolidierte verschiedene Datenquellen und unterstützte Managemententscheidungen durch Analysen und Visualisierungen." },
    { ...esPortfolio.experience[2], role: "Content-Moderator", period: "März 2023 – Januar 2024", description: "Ich analysierte digitale Inhalte anhand von Richtlinien und Qualitätskriterien, überwachte Produktivitäts- und Qualitätskennzahlen und identifizierte Vorfälle zur Eskalation und Lösung mit multidisziplinären Teams." },
  ],
};

export const portfolios: Record<Locale, PortfolioData> = { es: esPortfolio, en: enPortfolio, de: dePortfolio };
