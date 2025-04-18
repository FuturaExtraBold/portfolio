import { gsap } from "gsap";
import type { RefObject } from "react";
import type { DisplayObject } from "pixi.js";

interface AnimateTintOptions {
  color: number;
  duration: number;
  ref: RefObject<DisplayObject>;
}

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
