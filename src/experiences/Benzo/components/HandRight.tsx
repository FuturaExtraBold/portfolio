import { type JSX, useEffect, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { animateFloat } from "utils/animation";

export default function HandRight(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();
  const handRightRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!handRightRef.current || !allTexturesLoaded) return;
    animateFloat({
      ref: handRightRef,
      amplitudeX: parentSize.width * 0.01,
      amplitudeY: 0,
      rotationRange: 0.05,
      tickTime: 0.0125,
    });
  }, [allTexturesLoaded, handRightRef]);

  if (!allTexturesLoaded || !textures.handRight) return null;

  return (
    <pixiSprite
      ref={handRightRef}
      texture={textures.handRight}
      tint={0xffffff}
      width={parentSize.width}
      height={parentSize.height}
    />
  );
}
