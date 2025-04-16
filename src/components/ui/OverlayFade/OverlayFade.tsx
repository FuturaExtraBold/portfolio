import type { JSX } from "react";
import "./styles.scss";

interface OverlayFadeProps {
  opacity?: number;
}

export default function OverlayFade({
  opacity = 0.2,
}: OverlayFadeProps): JSX.Element {
  return (
    <div
      className="overlay-fade-up"
      data-testid="overlay-fade"
      style={{ opacity }}
    />
  );
}
