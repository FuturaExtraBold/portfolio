import { type JSX } from "react";
import "./styles.scss";

export default function Guide(): JSX.Element {
  return (
    <div className="guidelines" data-testid="guidelines">
      <div className="guideline"></div>
      <div className="guideline guideline--horizontal"></div>
    </div>
  );
}
