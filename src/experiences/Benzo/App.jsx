import { Application, extend } from "@pixi/react";
import { Container, Sprite } from "pixi.js";
import { BenzoProvider } from "./BenzoProvider";

extend({
  Container,
  Sprite,
});

export default function PixiApp({ parentRef }) {
  return (
    <Application
      antialias={true}
      autoDensity={true}
      background="#000000"
      backgroundAlpha={0}
      resizeTo={parentRef.current}
      resolution={window.devicePixelRatio || 1}
    >
      <BenzoProvider parentRef={parentRef} />
    </Application>
  );
}
