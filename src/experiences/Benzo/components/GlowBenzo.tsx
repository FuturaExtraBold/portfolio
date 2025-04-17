import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function GlowBenzo(): JSX.Element | null {
  const {
    allTexturesLoaded,
    colorCrystalBall,
    durationCrystalBall,
    parentSize,
    textures,
  } = useBenzo();

  const refGlowBenzo = useRef<Sprite | null>(null);

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
      alpha={0.6}
      height={parentSize.height}
      ref={refGlowBenzo}
      texture={textures.glowBenzo}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
