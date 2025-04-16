import type { JSX } from "react";
import "./styles.scss";
import separatorImage from "./separator.png";

export default function Separator(): JSX.Element {
  return (
    <div className="separator" data-testid="separator-container">
      <img className="separator__image" src={separatorImage} alt="Separator" />
    </div>
  );
}
