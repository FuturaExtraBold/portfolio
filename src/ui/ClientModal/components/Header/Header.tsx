import React, { type JSX } from "react";
import "./styles.scss";

interface HeaderProps {
  title: string;
  client?: string;
  description?: string;
}

const Header = ({ title, client, description }: HeaderProps): JSX.Element => {
  return (
    <header className="client-modal__header">
      <span className="heading--2 client-modal__title">{title}</span>
      {/* <span className="body client-modal__client-data">{client}</span> */}
      {/* <span className="body client-modal__description">{description}</span> */}
    </header>
  );
};

export default Header;
