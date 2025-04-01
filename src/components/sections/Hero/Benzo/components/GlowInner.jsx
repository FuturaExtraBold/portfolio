import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useBenzo } from "../BenzoProvider";

export default function GlowInner() {
  const refGlowInner = useRef(null);

  const { allTexturesLoaded, colorSmoke, durationSmoke, parentSize, textures } =
    useBenzo();

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
      alpha="0.8"
      eventMode={"static"}
      height={parentSize.height}
      ref={refGlowInner}
      texture={textures.glowInner}
      tint="#ffffff"
      width={parentSize.width}
    />
  );
}
