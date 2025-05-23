import { RefObject, type JSX } from "react";
import { Application, extend } from "@pixi/react";
import { Container, Sprite } from "pixi.js";
import { LighthouseProvider } from "./LighthouseProvider";

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
      antialias
      autoDensity
      background="#000000"
      backgroundAlpha={0}
      powerPreference="high-performance"
      preference="webgl"
      preferWebGLVersion={1}
      preserveDrawingBuffer={false}
      resizeTo={parentRef.current}
      resolution={window.devicePixelRatio || 1}
    >
      <LighthouseProvider parentRef={parentRef} />
    </Application>
  );
}
