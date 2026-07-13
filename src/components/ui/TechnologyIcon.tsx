import type { IconType } from "react-icons";
import { FaChartColumn, FaMasksTheater, FaSoap } from "react-icons/fa6";
import { HiCheckBadge } from "react-icons/hi2";
import {
  SiCypress,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

const technologyIcons: Record<string, IconType> = {
  Playwright: FaMasksTheater,
  Cypress: SiCypress,
  "Serenity BDD": HiCheckBadge,
  Postman: SiPostman,
  SoapUI: FaSoap,
  Python: SiPython,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Next.js": SiNextdotjs,
  React: SiReact,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  Git: SiGit,
  "GitHub Actions": SiGithubactions,
  Jira: SiJira,
  "Azure DevOps": VscAzureDevops,
  "Power BI": FaChartColumn,
};

export function TechnologyIcon({ name, color }: { name: string; color: string }) {
  const Icon = technologyIcons[name];
  if (!Icon) return null;
  return <span className="tech-icon" style={{ background: `${color}14`, color }} aria-hidden="true"><Icon focusable="false" /></span>;
}
