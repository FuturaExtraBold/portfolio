import React from "react";
import "./vignette.scss";

export default function Vignette() {
  return (
    <div className="vignette">
      <div className="vignette__piece vignette__piece--left"></div>
      <div className="vignette__piece vignette__piece--right"></div>
    </div>
  );
}
