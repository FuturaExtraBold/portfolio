import React from "react";
import PropTypes from "prop-types";
import "./vignette.scss";

export default function Vignette({ opacity }) {
  return <aside className="vignette" style={{ opacity: opacity }}></aside>;
}

Vignette.propTypes = {
  opacity: PropTypes.number,
};

Vignette.defaultProps = {
  opacity: 0.2,
};
