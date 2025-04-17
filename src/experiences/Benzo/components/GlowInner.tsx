import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function GlowInner(): JSX.Element | null {
  const { allTexturesLoaded, colorSmoke, durationSmoke, parentSize, textures } =
    useBenzo();

  const refGlowInner = useRef<Sprite | null>(null);

  useEffect(() => {
    if (refGlowInner.current) {
      gsap.to(refGlowInner.current, {
        pixi: { tint: colorSmoke },
        duration: durationSmoke,
      });
    }
  }, [colorSmoke, durationSmoke]);

  if (!allTexturesLoaded || !textures.glowInner) return null;

  return (
    <pixiSprite
      alpha={0.8}
      height={parentSize.height}
      ref={refGlowInner}
      texture={textures.glowInner}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
