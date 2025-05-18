import { type JSX, useEffect, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { animateTint } from "utils/animation";

export default function HandLeft(): JSX.Element | null {
  const { allTexturesLoaded, glowProps, parentSize, textures } = useBenzo();
  const handLeftRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!handLeftRef.current || !allTexturesLoaded) return;
    animateTint({
      color: glowProps.color,
      duration: glowProps.duration,
      ref: handLeftRef,
    });
  }, [allTexturesLoaded, glowProps, handLeftRef]);

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
