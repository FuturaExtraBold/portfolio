import { gsap } from "gsap";

export const animateRotation = ({
  duration,
  ease = "none",
  origin = 0.5,
  ref,
  repeat = true,
  rotationAmount = 360,
}) => {
  if (!ref.current) {
    console.warn("animateRotation ref.current is not defined");
    return;
  }

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
