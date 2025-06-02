import { type JSX, useEffect, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { animateFloat } from "utils/animation";

export default function HandLeft(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();
  const handLeftRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!handLeftRef.current || !allTexturesLoaded) return;
    animateFloat({
      ref: handLeftRef,
      amplitudeX: -parentSize.width * 0.01,
      amplitudeY: 0,
      rotationRange: 0.5,
      tickTime: 0.01,
    });
  }, [allTexturesLoaded, handLeftRef]);

  if (!allTexturesLoaded || !textures.handLeft) return null;

  return (
    <pixiSprite
      ref={handLeftRef}
      texture={textures.handLeft}
      tint={0xffffff}
      width={parentSize.width}
      height={parentSize.height}
    />
  );
}
