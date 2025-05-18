import { type JSX, useEffect, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { animateTint } from "utils/animation";

export default function HandRight(): JSX.Element | null {
  const { allTexturesLoaded, glowProps, parentSize, textures } = useBenzo();
  const handRightRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!handRightRef.current || !allTexturesLoaded) return;
    animateTint({
      color: glowProps.color,
      duration: glowProps.duration,
      ref: handRightRef,
    });
  }, [allTexturesLoaded, glowProps, handRightRef]);

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
