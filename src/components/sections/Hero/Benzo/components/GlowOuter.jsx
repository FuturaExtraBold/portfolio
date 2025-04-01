import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useBenzo } from "../BenzoProvider";

export default function GlowOuter() {
  const refGlowOuter = useRef(null);

  const { colorSmoke, durationSmoke, parentSize, allTexturesLoaded, textures } =
    useBenzo();

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
      alpha="0.4"
      eventMode={"static"}
      height={parentSize.height}
      ref={refGlowOuter}
      texture={textures.glowOuter}
      tint="#ffffff"
      width={parentSize.width}
    />
  );
}
