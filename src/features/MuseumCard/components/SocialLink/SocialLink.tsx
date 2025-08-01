import { cloneElement, type JSX } from "react";
import "./styles.scss";

interface SocialLinkProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

export default function SocialLink({
  href,
  icon,
  label,
}: SocialLinkProps): JSX.Element {
  return (
    <a
      aria-label={label}
      className="social-link"
      href={href}
      rel="nofollow noreferrer"
      target="_blank"
    >
      {cloneElement(icon, {
        "aria-label": `${label} icon`,
      })}
    </a>
  );
}
