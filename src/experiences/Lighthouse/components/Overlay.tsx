import { type JSX } from "react";
import { useLighthouse } from "../LighthouseProvider";

export default function Overlay(): JSX.Element | null {
  const { allTexturesLoaded, overlayRef, parentSize } = useLighthouse();

  if (!allTexturesLoaded) return null;

  return (
    <pixiGraphics
      alpha={0}
      ref={overlayRef}
      draw={(graphics) => {
        graphics.clear();
        graphics.fill({ color: 0xffbd28 });
        graphics.rect(0, 0, parentSize.width, parentSize.height);
        graphics.fill();
      }}
    />
  );
}
