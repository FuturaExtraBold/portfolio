import type { JSX } from "react";
import "./styles.scss";

export default function Separator(): JSX.Element {
  return (
    <div className="separator" data-testid="separator-container">
      <img
        className="separator__image"
        src="/assets/images/ui/separator.webp"
        alt="Separator"
      />
    </div>
  );
}
