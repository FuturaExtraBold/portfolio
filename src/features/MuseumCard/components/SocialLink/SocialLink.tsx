import { type JSX } from "react";
import "./styles.scss";

interface SocialLinkProps {
  href: string;
  icon: JSX.Element;
}

export default function SocialLink({
  href,
  icon,
}: SocialLinkProps): JSX.Element {
  return (
    <a
      className="social-link"
      href={href}
      rel="nofollow noreferrer"
      target="_blank"
    >
      {icon}
    </a>
  );
}

export { SocialLink };
