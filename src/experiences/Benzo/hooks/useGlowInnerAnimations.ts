import { type RefObject, useEffect } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

interface UseGlowInnerAnimationsProps {
  glowInnerRef: RefObject<Sprite | null>;
}

export default function useGlowInnerAnimations({
  glowInnerRef,
}: UseGlowInnerAnimationsProps): void {
  const { colorSmoke, durationSmoke } = useBenzo();

  useEffect(() => {
    // console.log("Benzo - Glow Inner - GSAP Tint");
    gsap.to(glowInnerRef.current, {
      pixi: { tint: colorSmoke },
      duration: durationSmoke,
    });
  }, [colorSmoke, durationSmoke, glowInnerRef]);
}
