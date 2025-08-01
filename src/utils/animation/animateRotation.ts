import type { AnimateRotationOptions } from "utils/animation";
import { gsap } from "gsap";

export const animateRotation = ({
  duration,
  ease = "none",
  getNextParams,
  origin = 0.5,
  ref,
  repeat = true,
  rotationAmount = 360,
}: AnimateRotationOptions): void => {
  if (!ref.current) return;

  gsap.killTweensOf(ref.current, "pixi");

  gsap.set(ref.current, {
    pixi: { rotation: 0 },
  });

  gsap.to(ref.current, {
    pixi: { anchor: origin, rotation: rotationAmount },
    duration,
    ease,
    onComplete: () => {
      if (repeat && getNextParams) {
        const { duration: nextDuration, origin: nextOrigin } = getNextParams();
        animateRotation({
          duration: nextDuration,
          origin: nextOrigin,
          ease,
          ref,
          rotationAmount,
          repeat,
          getNextParams,
        });
      }
    },
  });
};
