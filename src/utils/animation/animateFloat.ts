import type { RefObject } from "react";
import type { DisplayObject } from "@pixi/display";
import { gsap } from "gsap";

interface AnimateFloatOptions {
  amplitudeX?: number;
  amplitudeY?: number;
  ref: RefObject<DisplayObject | HTMLImageElement | null>;
  rotationRange?: number;
  tickTime?: number;
}

export const animateFloat = ({
  amplitudeX = 10,
  amplitudeY = 5,
  ref,
  rotationRange = 360,
  tickTime = 0.01,
}: AnimateFloatOptions): (() => void) => {
  if (!ref.current) {
    console.warn("animateFloat ref.current is not defined");
    return () => {};
  }

  gsap.killTweensOf(ref.current);

  let time = 0;

  const tick = () => {
    time += tickTime;

    const offsetX = Math.sin(time * 0.8) * amplitudeX;
    const offsetY = Math.cos(time * 0.6) * amplitudeY;
    const rotation = Math.sin(time * 0.3) * ((rotationRange * Math.PI) / 180);

    gsap.set(ref.current, {
      x: offsetX,
      y: offsetY,
      rotation,
    });
  };

  gsap.ticker.add(tick);

  return () => {
    gsap.ticker.remove(tick);
    gsap.killTweensOf(ref.current);
  };
};
