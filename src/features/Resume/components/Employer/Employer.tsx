import { type JSX } from "react";
import "./styles.scss";

interface EmployerProps {
  description: string;
  logo: JSX.Element | null;
  name: string;
  tenure: string;
}

export default function Employer({
  description = "Description",
  logo = null,
  name = "Employer",
  tenure = "Two",
}: EmployerProps): JSX.Element {
  return (
    <div className={`employer employer--${name.toLowerCase()}`}>
      <div className="employer__logo">{logo}</div>
      <div className="employer__text">
        <span className="body text-grey employer__tenure">{tenure}</span>
        <span className="body text-accent employer__description">
          {description}
        </span>
      </div>
    </div>
  );
}
