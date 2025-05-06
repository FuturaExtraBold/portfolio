import { type RefObject, useEffect } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

interface UseGlowBenzoAnimationsProps {
  glowBenzoRef: RefObject<Sprite | null>;
}

export default function useGlowBenzoAnimations({
  glowBenzoRef,
}: UseGlowBenzoAnimationsProps): void {
  const { colorCrystalBall, durationCrystalBall } = useBenzo();

  useEffect(() => {
    // console.log("Benzo - Glow Benzo - GSAP Tint");
    gsap.to(glowBenzoRef.current, {
      pixi: { tint: colorCrystalBall },
      duration: durationCrystalBall,
    });
  }, [colorCrystalBall, durationCrystalBall, glowBenzoRef]);
}
