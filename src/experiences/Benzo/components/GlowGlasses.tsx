import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function GlowGlasses(): JSX.Element | null {
  const {
    allTexturesLoaded,
    colorCrystalBall,
    durationCrystalBall,
    parentSize,
    textures,
  } = useBenzo();

  const refGlowGlasses = useRef<Sprite | null>(null);

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
      alpha={1}
      height={parentSize.height}
      ref={refGlowGlasses}
      texture={textures.glowGlasses}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
