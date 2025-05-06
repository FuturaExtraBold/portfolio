import { type RefObject, useEffect } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

interface UseGlowOuterAnimationsProps {
  glowOuterRef: RefObject<Sprite | null>;
}

export default function useGlowOuterAnimations({
  glowOuterRef,
}: UseGlowOuterAnimationsProps): void {
  const { colorSmoke, durationSmoke } = useBenzo();

  useEffect(() => {
    console.log("Benzo - Glow Outer - GSAP Tint");
    gsap.to(glowOuterRef.current, {
      pixi: { tint: colorSmoke },
      duration: durationSmoke,
    });
  }, [colorSmoke, durationSmoke, glowOuterRef]);
}
