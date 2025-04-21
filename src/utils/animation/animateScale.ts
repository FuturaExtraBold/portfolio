import type { AnimateScaleOptions } from "utils/animation";
import { gsap } from "gsap";

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
