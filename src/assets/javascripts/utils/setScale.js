import { gsap } from "gsap";

export const setScale = ({
  maxScale = 1,
  minScale = 0.5,
  maxWidth = 1440,
  minWidth = 768,
  ref,
  parentSize,
  scaleRef,
}) => {
  if (!ref.current) {
    console.warn("setScale ref.current is not defined");
    return 0.5;
  }

  if (!parentSize) {
    console.warn("setScale parentSize is not defined");
    return 0.5;
  }

  const scale = Math.min(
    maxScale,
    Math.max(
      minScale,
      ((parentSize.width - minWidth) / (maxWidth - minWidth)) *
        (maxScale - minScale) +
        minScale
    )
  );

  gsap.set(ref.current, { pixi: { scale: scale } });
  scaleRef.current = scale;
};
