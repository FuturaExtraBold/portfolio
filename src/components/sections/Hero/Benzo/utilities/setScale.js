import { gsap } from "gsap";

export const setScale = ({
  maxWidth = 1440,
  minWidth = 768,
  ref,
  parentSize,
  scaleRef,
}) => {
  const calculateScale = () => {
    if (!ref.current) {
      console.warn("setScale ref.current is not defined");
      return 0.5;
    }
    if (!parentSize) {
      console.warn("setScale parentSize is not defined");
      return 0.5;
    }
    const width = Math.max(minWidth, Math.min(parentSize.width, maxWidth));
    return width / maxWidth / 2;
  };

  const scale = calculateScale();
  if (ref.current) {
    gsap.set(ref.current, { pixi: { scale: scale } });
  }

  scaleRef.current = scale;
};
