import { Container, DisplacementFilter, Sprite, TilingSprite } from "pixi.js";
import { Application, extend } from "@pixi/react";
import { HellProvider } from "./HellProvider";

extend({
  Container,
  DisplacementFilter,
  Sprite,
  TilingSprite,
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
      <HellProvider parentRef={parentRef} />
    </Application>
  );
}
