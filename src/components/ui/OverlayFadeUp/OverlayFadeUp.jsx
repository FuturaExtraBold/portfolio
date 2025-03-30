import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export default function OverlayFadeUp({ opacity }) {
  return <div className="overlay-fade-up" style={{ opacity: opacity }} />;
}

OverlayFadeUp.propTypes = {
  opacity: PropTypes.number,
};

OverlayFadeUp.defaultProps = {
  opacity: 0.2,
};
