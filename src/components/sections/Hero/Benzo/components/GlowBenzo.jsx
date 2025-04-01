import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useBenzo } from "../BenzoProvider";

export default function GlowBenzo() {
  const refGlowBenzo = useRef(null);

  const {
    allTexturesLoaded,
    colorCrystalBall,
    durationCrystalBall,
    parentSize,
    textures,
  } = useBenzo();

  useEffect(() => {
    if (refGlowBenzo.current) {
      gsap.to(refGlowBenzo.current, {
        pixi: { tint: colorCrystalBall },
        duration: durationCrystalBall,
      });
    }
  }, [colorCrystalBall, durationCrystalBall]);

  if (!allTexturesLoaded || !textures.glowBenzo) return null;

  return (
    <pixiSprite
      alpha="0.6"
      eventMode={"static"}
      height={parentSize.height}
      ref={refGlowBenzo}
      texture={textures.glowBenzo}
      tint="#ffffff"
      width={parentSize.width}
    />
  );
}
