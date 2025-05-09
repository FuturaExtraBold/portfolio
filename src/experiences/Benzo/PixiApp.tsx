import { RefObject, type JSX } from "react";
import { Application, extend } from "@pixi/react";
import { Container, Sprite } from "pixi.js";
import { BenzoProvider } from "./BenzoProvider";

extend({
  Container,
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
      resizeTo={parentRef.current}
      resolution={window.devicePixelRatio || 1}
    >
      <BenzoProvider parentRef={parentRef} />
    </Application>
  );
}
