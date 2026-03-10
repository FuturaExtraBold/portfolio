import { gsap } from "gsap";
import type { AnimateTintOptions } from "utils/animation";

export const animateTint = ({
  color,
  duration,
  ref,
}: AnimateTintOptions): void => {
  if (!ref.current) {
    console.warn("animateTint ref.current is not defined");
    return;
  }

  gsap.to(ref.current, {
    pixi: { tint: color },
    duration: duration,
  });
};
