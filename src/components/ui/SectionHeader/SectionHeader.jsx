import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";

export default function SectionHeader({ subtitle, title, variant }) {
  const headerClass = classnames("section-header", {
    [`section-header--${variant}`]: variant,
  });

  return (
    <header className={headerClass}>
      <p className="heading--1">{title}</p>
      <p className="heading--3 section-header__description">{subtitle}</p>
      <div className="hairline" />
    </header>
  );
}

SectionHeader.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

SectionHeader.defaultProps = {
  variant: "",
};
