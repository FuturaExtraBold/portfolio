import type { JSX } from "react";
import "./styles.scss";

export default function Separator(): JSX.Element {
  return (
    <div className="separator" data-testid="separator-container">
      <img
        alt="Separator"
        className="separator__image"
        src=""
        srcSet="/assets/images/ui/separator@1x.webp 1535w, /assets/images/ui/separator@2x.webp 1536w"
      />
    </div>
  );
}
