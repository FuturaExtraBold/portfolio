import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export default function Background({ children, ref }) {
  return <div className="background">{children}</div>;
}

Background.defaultProps = {
  children: null,
  ref: null,
};

Background.propTypes = {
  children: PropTypes.node,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
