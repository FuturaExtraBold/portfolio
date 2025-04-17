import React, { type JSX } from "react";
import "./styles.scss";

interface HeaderProps {
  title: string;
  clientData: string;
  description: string;
}

const Header = ({
  title,
  clientData,
  description,
}: HeaderProps): JSX.Element => {
  return (
    <header className="client-modal__header">
      <span className="heading--2 client-modal__title">{title}</span>
      {/* <span className="body client-modal__client-data">{clientData}</span> */}
      {/* <span className="body client-modal__description">{description}</span> */}
    </header>
  );
};

export default Header;
