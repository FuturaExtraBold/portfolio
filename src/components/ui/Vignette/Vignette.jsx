import React from "react";
import { useApp } from "AppProvider";
import "./vignette.scss";

export default function Vignette() {
  const { breakpoints, windowSize } = useApp();
  const { width } = windowSize;

  const minWidth = breakpoints.md;
  const maxWidth = breakpoints.lg;
  const minValue = 0.1;
  const maxValue = 0.5;

  const opacity = Math.min(
    maxValue,
    Math.max(
      minValue,
      ((width - minWidth) / (maxWidth - minWidth)) * (maxValue - minValue) +
        minValue
    )
  );

  return <aside className="vignette" style={{ opacity: opacity }}></aside>;
}
