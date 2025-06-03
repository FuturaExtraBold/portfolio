import { type JSX } from "react";
import "./styles.scss";
import btnBg from "./btn_bg.webp";

interface MagicButtonProps {
  label: string;
  href: string;
  isExternal?: boolean;
}

export default function MagicButton({
  label,
  href,
  isExternal = false,
}: MagicButtonProps): JSX.Element {
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="magic-button"
    >
      <img src={btnBg} alt="" className="magic-button__background" />
      <span className="magic-button__label">{label}</span>
    </a>
  );
}
