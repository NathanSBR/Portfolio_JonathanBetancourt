"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { IconType } from "react-icons";
import { FiCheckCircle, FiCode, FiCpu, FiGitBranch, FiServer } from "react-icons/fi";
import { TbRobot } from "react-icons/tb";

const specialtyIcons: Record<string, IconType> = {
  SA: FiGitBranch,
  QA: FiCheckCircle,
  RPA: TbRobot,
  AI: FiCpu,
  BE: FiServer,
};

export function Specialties() {
  const { portfolio, copy } = useLanguage();
  return (
    <section className="section compact" id="especialidades" aria-label={copy.specialtiesTitle}>
      <div className="container">
        <SectionHeading eyebrow={copy.specialtiesEyebrow} title={copy.specialtiesTitle} copy={copy.specialtiesCopy} />
        <Reveal>
          <div className="specialty-grid">
            {portfolio.specialties.map((item) => {
              const Icon = specialtyIcons[item.icon] ?? FiCode;
              return (
                <article className="specialty-card" key={item.title}>
                  <span className="specialty-icon" aria-hidden="true">
                    <Icon strokeWidth={1.6} focusable="false" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="card-arrow" aria-hidden="true">↗</span>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
