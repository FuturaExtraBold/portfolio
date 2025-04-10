import { gsap } from "gsap";

export const animateScale = ({
  duration,
  ease = "none",
  ref,
  repeat = true,
  yoyo = true,
  scaleAmount = 1.2,
}) => {
  if (!ref.current) {
    console.warn("animateRotation ref.current is not defined");
    return;
  }

  const yoyoSquare = gsap.timeline();

  yoyoSquare.fromTo(
    ref.current,
    { pixi: { scale: 1 } },
    {
      pixi: { scale: scaleAmount },
      duration: duration,
      ease: ease,
      repeat: repeat,
      yoyo: true,
    }
  );
};
