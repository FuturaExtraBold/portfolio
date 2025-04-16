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
    console.warn("animateScale ref.current is not defined");
    return;
  }

  gsap.killTweensOf(ref.current, "pixi");

  gsap.fromTo(
    ref.current,
    { pixi: { scale: 1 } },
    {
      pixi: { scale: scaleAmount },
      duration,
      ease,
      repeat,
      yoyo,
    }
  );
};
