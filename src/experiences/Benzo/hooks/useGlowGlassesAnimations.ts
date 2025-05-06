import { type RefObject, useEffect } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

interface UseGlowGlassesAnimationsProps {
  glowGlassesRef: RefObject<Sprite | null>;
}

export default function useGlowGlassesAnimations({
  glowGlassesRef,
}: UseGlowGlassesAnimationsProps): void {
  const { colorCrystalBall, durationCrystalBall } = useBenzo();

  useEffect(() => {
    console.log("Benzo - Glow Glasses - GSAP Tint");
    gsap.to(glowGlassesRef.current, {
      pixi: { tint: colorCrystalBall },
      duration: durationCrystalBall,
    });
  }, [colorCrystalBall, durationCrystalBall, glowGlassesRef]);
}
