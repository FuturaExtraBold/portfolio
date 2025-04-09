import { gsap } from "gsap";

export const animateTint = ({ color, duration, ref }) => {
  if (ref.current) {
    gsap.to(ref.current, {
      pixi: { tint: color, duration: duration },
    });
  }
};
