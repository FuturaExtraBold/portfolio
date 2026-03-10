import "./styles.scss";

import { type JSX } from "react";

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
