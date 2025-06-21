import type { JSX } from "react";
import AnimatedText from "ui/AnimatedText/AnimatedText";
import classnames from "classnames";
import "./styles.scss";
import FadeIn from "ui/FadeIn/FadeIn";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  useHairline?: boolean;
  useShadow?: boolean;
  variant: "default" | "dark";
}

export default function SectionHeader({
  subtitle,
  title,
  useHairline = true,
  useShadow = false,
  variant = "default",
}: SectionHeaderProps): JSX.Element {
  const headerClass = classnames("section-header", {
    [`section-header--${variant}`]: variant,
    [`section-header--text-shadow`]: useShadow,
  });

  return (
    <header className={headerClass} data-testid="section-header">
      <span className="heading--1">
        <AnimatedText text={title} />
      </span>
      <FadeIn>
        <span className="body body--large">{subtitle}</span>
      </FadeIn>
      {useHairline && (
        <div
          className="section-header__hairline"
          data-testid="section-header__hairline"
        />
      )}
    </header>
  );
}
