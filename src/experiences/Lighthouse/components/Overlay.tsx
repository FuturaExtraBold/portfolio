import { type JSX, useEffect, useRef } from "react";
// import { gsap } from "gsap";
import { Graphics } from "pixi.js";
import { useLighthouse } from "../LighthouseProvider";

export default function Overlay(): JSX.Element | null {
  const { allTexturesLoaded, parentSize } = useLighthouse();

  const refOverlay = useRef<Graphics | null>(null);

  useEffect(() => {
    // const tl = gsap.timeline({ repeat: -1 });
    if (refOverlay.current) {
      // console.log("boomtown");
    }
  }, [parentSize, refOverlay]);

  if (!allTexturesLoaded) return null;

  return (
    <pixiGraphics
      alpha={0}
      ref={refOverlay}
      draw={(graphics) => {
        graphics.clear();
        graphics.fill({ color: 0xffbd28 });
        graphics.rect(0, 0, parentSize.width, parentSize.height);
        graphics.fill();
      }}
    />
  );
}
