import { type JSX } from "react";
import "./styles.scss";
import btnBg from "./btn_bg.webp";

interface MagicButtonProps {
  ariaLabel?: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export default function MagicButton({
  ariaLabel = "Magic Button",
  label,
  href,
  isExternal = false,
}: MagicButtonProps): JSX.Element {
  return (
    <a
      aria-label={ariaLabel}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="magic-button"
    >
      <img
        src={btnBg}
        alt=""
        className="magic-button__background"
        width={600}
        height={182}
        loading="lazy"
      />
      <span className="magic-button__label">{label}</span>
    </a>
  );
}
