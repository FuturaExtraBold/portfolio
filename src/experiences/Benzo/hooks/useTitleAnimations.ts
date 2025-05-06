import { type RefObject, useEffect } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";

interface UseTitleAnimationsProps {
  refs: RefObject<Sprite | null>[];
}

export default function useTitleAnimations({
  refs,
}: UseTitleAnimationsProps): void {
  useEffect(() => {
    if (!refs) return;
    console.log("Benzo - Title - animateLetters");
    const letters = refs.slice(0, 5);
    letters.forEach((ref, index) => {
      gsap.from(ref.current, {
        delay: index * 0.05 + 1,
        duration: 0.5,
        ease: "back.out",
        pixi: { alpha: 0 },
        y: -200,
      });
    });
  }, [refs]);
}
