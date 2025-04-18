import { gsap } from "gsap";
import type { DisplayObject } from "pixi.js";
import type { RefObject } from "react";

interface AnimateScaleOptions {
  duration: number;
  ease?: string;
  ref: RefObject<DisplayObject>;
  repeat?: boolean;
  yoyo?: boolean;
  scaleAmount?: number;
}

export const animateScale = ({
  duration,
  ease = "none",
  ref,
  repeat = true,
  yoyo = true,
  scaleAmount = 1.2,
}: AnimateScaleOptions): void => {
  if (!ref.current) {
    console.warn("animateScale ref.current is not defined");
    return;
  }
  const repeatValue = repeat ? -1 : 0;

  gsap.killTweensOf(ref.current, "pixi");

  gsap.fromTo(
    ref.current,
    { pixi: { scale: 1 } },
    {
      pixi: { scale: scaleAmount },
      duration,
      ease,
      repeat: repeatValue,
      yoyo,
    }
  );
};
