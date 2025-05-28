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
  if (!parentRef.current) return null;

  return (
    <Application
      antialias
      autoDensity
      backgroundColor={0x000000}
      powerPreference="high-performance"
      preference="webgl"
      preferWebGLVersion={1}
      preserveDrawingBuffer={false}
      resizeTo={parentRef.current}
      resolution={Math.min(window.devicePixelRatio || 1, 2)}
    >
      <BenzoProvider parentRef={parentRef} />
    </Application>
  );
}
