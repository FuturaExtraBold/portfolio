import React, { useRef } from "react";
import { Application, extend } from "@pixi/react";
import { Container, Graphics, Sprite } from "pixi.js";
import { Benzo } from "components/Benzo/Benzo";
import Vignette from "components/Vignette/Vignette";
import "./hero.scss";

// extend tells @pixi/react what Pixi.js components are available
extend({
  Container,
  Graphics,
  Sprite,
});

export default function Hero() {
  const parentRef = useRef(null);

  return (
    <div className="hero">
      <div className="container hero__container" ref={parentRef}>
        <Vignette />
        <div className="content">
          <Application background="#000000" resizeTo={parentRef}>
            <Benzo parentRef={parentRef} />
          </Application>
        </div>
      </div>
    </div>
  );
}
