import React from "react";
import classnames from "classnames";
import "./styles.scss";

export default function Content({ children, className }) {
  const contentClass = classnames("content", {
    [`${className}`]: className,
  });

  return <div className={contentClass}>{children}</div>;
}
