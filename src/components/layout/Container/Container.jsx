import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";

export default function Container({ children, className = "", ref = null }) {
  const containerClass = classnames("container", {
    [`${className}`]: className,
  });

  return (
    <div className={containerClass} ref={ref}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
