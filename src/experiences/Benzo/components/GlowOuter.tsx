import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function GlowOuter(): JSX.Element | null {
  const { colorSmoke, durationSmoke, parentSize, allTexturesLoaded, textures } =
    useBenzo();

  const refGlowOuter = useRef<Sprite | null>(null);

  useEffect(() => {
    if (refGlowOuter.current) {
      gsap.to(refGlowOuter.current, {
        pixi: { tint: colorSmoke },
        duration: durationSmoke,
      });
    }
  }, [colorSmoke, durationSmoke]);

  if (!allTexturesLoaded || !textures.glowOuter) return null;

  return (
    <pixiSprite
      alpha={0.4}
      height={parentSize.height}
      ref={refGlowOuter}
      texture={textures.glowOuter}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
