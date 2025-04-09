import { gsap } from "gsap";

export const animateRotation = ({ ref }) => {
  if (!ref.current) {
    console.warn("animateRotation ref.current is not defined");
    return;
  }

  const duration = Math.random() * 4 + 4;
  const origin = (45 + Math.random() * 10) / 100;

  gsap.set(ref.current, {
    pixi: { rotation: 0 },
  });

  gsap.to(ref.current, {
    pixi: { anchor: origin, rotation: 360 },
    duration: duration,
    ease: "none",
    onComplete: () => {
      animateRotation();
    },
  });
};
