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
      <span className="heading--1">{title}</span>
      <span className="heading--3">{subtitle}</span>
      <div className="section-header__hairline" />
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
