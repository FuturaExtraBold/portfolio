import { RefObject, type JSX } from "react";
import { Application, extend } from "@pixi/react";
import { Container, Graphics, Sprite } from "pixi.js";
import { LighthouseProvider } from "./LighthouseProvider";

extend({
  Container,
  Graphics,
  Sprite,
});

interface PixiAppProps {
  parentRef: RefObject<HTMLDivElement>;
}

export default function PixiApp({
  parentRef,
}: PixiAppProps): JSX.Element | null {
  return (
    <Application
      antialias={true}
      autoDensity={true}
      background="#000000"
      backgroundAlpha={0}
      resizeTo={parentRef.current}
      resolution={window.devicePixelRatio || 1}
    >
      <LighthouseProvider parentRef={parentRef} />
    </Application>
  );
}
