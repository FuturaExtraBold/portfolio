import { type JSX } from "react";
import "./styles.scss";

interface ClientProps {
  LogoComponent: () => JSX.Element;
  onClick: () => void;
}

export default function Client({
  LogoComponent,
  onClick,
}: ClientProps): JSX.Element {
  return (
    <div className="client" onClick={onClick}>
      <LogoComponent />
    </div>
  );
}
