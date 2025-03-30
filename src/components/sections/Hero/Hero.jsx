import React, { useRef } from "react";
import { Application, extend } from "@pixi/react";
import { Container, Sprite } from "pixi.js";
import { BenzoProvider } from "./Benzo/BenzoProvider";
import Separator from "components/ui/Separator/Separator";
import "./styles.scss";

// extend tells @pixi/react what Pixi.js components are available
extend({
  Container,
  Sprite,
});

export default function Hero() {
  const parentRef = useRef(null);

  return (
    <section className="hero">
      <div className="content hero__content" ref={parentRef}>
        <Application background="#000000" resizeTo={parentRef}>
          <BenzoProvider parentRef={parentRef} />
        </Application>
      </div>
      <Separator />
      <div className="overlay"></div>
    </section>
  );
}
