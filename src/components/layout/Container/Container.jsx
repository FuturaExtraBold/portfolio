import React from "react";
import classnames from "classnames";
import "./styles.scss";

export default function Container({ children, className }) {
  const containerClass = classnames("container", {
    [`${className}`]: className,
  });
  return <div className={containerClass}>{children}</div>;
}
