import React from "react";
import "./vignette.scss";

export default function Vignette({ opacity }) {
  const resolvedOpacity = opacity || 0.2;
  return <div className="vignette" style={{ opacity: resolvedOpacity }}></div>;
}
