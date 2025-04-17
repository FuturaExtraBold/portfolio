import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useBenzo } from "../BenzoProvider";

export default function GlowGlasses() {
  const refGlowGlasses = useRef(null);

  const {
    allTexturesLoaded,
    colorCrystalBall,
    durationCrystalBall,
    parentSize,
    textures,
  } = useBenzo();

  useEffect(() => {
    if (refGlowGlasses.current) {
      gsap.to(refGlowGlasses.current, {
        pixi: { tint: colorCrystalBall },
        duration: durationCrystalBall,
      });
    }
  }, [colorCrystalBall, durationCrystalBall, refGlowGlasses]);

  if (!allTexturesLoaded || !textures.glowGlasses) return null;

  return (
    <pixiSprite
      alpha="1"
      eventMode={"static"}
      height={parentSize.height}
      ref={refGlowGlasses}
      texture={textures.glowGlasses}
      tint="#ffffff"
      width={parentSize.width}
    />
  );
}
