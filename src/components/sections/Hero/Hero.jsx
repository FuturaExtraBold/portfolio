import React, { useRef } from "react";
import { Application, extend } from "@pixi/react";
import { Container, Sprite } from "pixi.js";
import { BenzoProvider } from "./Benzo/BenzoProvider";
import Vignette from "components/ui/Vignette/Vignette";
import "./hero.scss";

// extend tells @pixi/react what Pixi.js components are available
extend({
  Container,
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
            <BenzoProvider parentRef={parentRef} />
          </Application>
        </div>
      </div>
    </div>
  );
}
