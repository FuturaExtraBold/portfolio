import React from "react";
import "./hero.scss";
import Vignette from "components/Vignette/Vignette";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <Vignette />
        <div className="content">Hero</div>
      </div>
    </div>
  );
}
