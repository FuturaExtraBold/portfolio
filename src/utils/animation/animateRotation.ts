import type { AnimateRotationOptions } from "utils/animation";
import { gsap } from "gsap";

export const animateRotation = ({
  duration,
  ease = "none",
  origin = 0.5,
  ref,
  repeat = true,
  rotationAmount = 360,
}: AnimateRotationOptions): void => {
  if (!ref.current) {
    console.warn("animateRotation ref.current is not defined");
    return;
  }

  gsap.killTweensOf(ref.current, "pixi");

  gsap.set(ref.current, {
    pixi: { rotation: 0 },
  });

  gsap.to(ref.current, {
    pixi: { anchor: origin, rotation: rotationAmount },
    duration: duration,
    ease: ease,
    onComplete: () => {
      if (repeat) {
        animateRotation({
          duration,
          ease,
          origin,
          ref,
          rotationAmount,
          repeat,
        });
      }
    },
  });
};
