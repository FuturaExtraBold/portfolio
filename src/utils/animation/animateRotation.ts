import { gsap } from "gsap";
import type { DisplayObject } from "pixi.js";
import type { RefObject } from "react";

interface AnimateRotationOptions {
  duration: number;
  ease?: string;
  origin?: number;
  ref: RefObject<DisplayObject>;
  repeat?: boolean;
  rotationAmount?: number;
}

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
