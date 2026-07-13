"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiCheckCircle, FiCpu, FiGitBranch, FiServer } from "react-icons/fi";
import { TbRobot } from "react-icons/tb";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SocialIcon } from "@/components/ui/SocialIcon";

const codeRoles = ["Software Automation Engineer", "QA Automation", "RPA", "AI Engineer", "Backend"];
const roleIcons = [FiGitBranch, FiCheckCircle, TbRobot, FiCpu, FiServer];
type CodeAnimation = { text: string; roleIndex: number; phase: "typing" | "holding" | "deleting" };

export function Hero() {
  const { portfolio, copy } = useLanguage();
  const { person, socialLinks } = portfolio;
  const [reduceMotion, setReduceMotion] = useState(false);
  const [animation, setAnimation] = useState<CodeAnimation>({ text: "", roleIndex: 0, phase: "typing" });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(media.matches);
    queueMicrotask(updatePreference);
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const role = codeRoles[animation.roleIndex];
    const delay = animation.phase === "typing" ? 68 : animation.phase === "holding" ? 1900 : 36;
    const timer = window.setTimeout(() => {
      if (document.documentElement.classList.contains("a11y-pause")) {
        setAnimation((current) => ({ ...current }));
        return;
      }
      setAnimation((current) => {
        if (current.phase === "typing") {
          if (current.text.length < role.length) return { ...current, text: role.slice(0, current.text.length + 1) };
          return { ...current, phase: "holding" };
        }
        if (current.phase === "holding") return { ...current, phase: "deleting" };
        if (current.text.length > 0) return { ...current, text: current.text.slice(0, -1) };
        return { text: "", roleIndex: (current.roleIndex + 1) % codeRoles.length, phase: "typing" };
      });
    }, delay);
    return () => window.clearTimeout(timer);
  }, [animation, reduceMotion]);

  const visibleRole = reduceMotion ? codeRoles[0] : animation.text;
  const visualRoleIndex = reduceMotion ? 0 : animation.roleIndex;
  const RoleIcon = roleIcons[visualRoleIndex];
  return <section className="hero section" id="inicio"><div className="container hero-code-banner" aria-label={codeRoles.join(", ")}><code aria-hidden="true"><span className="code-string">{visibleRole}</span><span className="code-cursor">_</span></code></div><div className="container hero-grid">
    <div className="hero-copy"><h1>{copy.hello} <span>{person.shortName}</span></h1><p className="hero-headline">{person.headline}</p><p className="hero-description">{person.description}</p><div className="hero-actions"><a className="button button-primary" href="#proyectos">{copy.viewProjects} <span>→</span></a><a className="button button-secondary" href="#contacto">{copy.contact} <span>↗</span></a></div><div className="social-row"><small>{copy.followMe}</small>{socialLinks.map((link) => <a key={link.label} href={link.href} aria-label={link.label}><SocialIcon href={link.href} /></a>)}</div></div>
    <div className={`portrait-wrap role-visual-${visualRoleIndex}`}><span className="portrait-backdrop" aria-hidden="true" /><span className="portrait-shape shape-ring" aria-hidden="true"><RoleIcon key={visualRoleIndex} /></span><span className="portrait-shape shape-diamond" aria-hidden="true" /><span className="portrait-shape shape-code" aria-hidden="true">{"{ }"}</span><span className="portrait-shape shape-dots" aria-hidden="true" /><div className="portrait-figure"><Image src="/jonathan-betancourt-oficial.png" alt={copy.portraitAlt} width={1122} height={1402} priority sizes="(max-width: 600px) calc(100vw - 24px), (max-width: 860px) 520px, 590px" /></div></div>
  </div></section>;
}
