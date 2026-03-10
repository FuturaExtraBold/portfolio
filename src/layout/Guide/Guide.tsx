import "./styles.scss";

import { type JSX } from "react";

export default function Guide(): JSX.Element {
  return (
    <div className="guidelines" data-testid="guidelines">
      <div className="guideline"></div>
      <div className="guideline guideline--horizontal"></div>
    </div>
  );
}
