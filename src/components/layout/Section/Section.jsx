import React from "react";
import PropTypes from "prop-types";

export default function Section({ children, className }) {
  return <section className={className}>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
