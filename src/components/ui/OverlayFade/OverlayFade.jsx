import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export default function OverlayFade({ opacity }) {
  return <div className="overlay-fade-up" style={{ opacity: opacity }} />;
}

OverlayFade.propTypes = {
  opacity: PropTypes.number,
};

OverlayFade.defaultProps = {
  opacity: 0.2,
};
