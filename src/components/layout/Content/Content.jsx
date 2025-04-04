import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";

export default function Content({ children, className = "", ref = null }) {
  const contentClass = classnames("content", {
    [`${className}`]: className,
  });

  return (
    <div className={contentClass} ref={ref}>
      {children}
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
