import { type JSX } from "react";
import "./styles.scss";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): JSX.Element => {
  return (
    <header className="client-modal__header">
      <span className="heading--2 client-modal__title">{title}</span>
    </header>
  );
};

export default Header;
