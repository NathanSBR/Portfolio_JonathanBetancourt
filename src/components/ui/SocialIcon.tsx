import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export function SocialIcon({ href }: { href: string }) {
  if (href.includes("github.com")) return <FaGithub aria-hidden="true" />;
  if (href.includes("linkedin.com")) return <FaLinkedinIn aria-hidden="true" />;
  return <FiMail aria-hidden="true" />;
}
