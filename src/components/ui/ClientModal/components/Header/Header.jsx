import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export default function Header({ title, client, description }) {
  return (
    <header className="client-modal__header">
      <span className="heading--2 client-modal__title">{title}</span>
      <span className="body client-modal__client-data">{client}</span>
      <span className="body client-modal__description">{description}</span>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  clientData: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
