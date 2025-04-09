import { gsap } from "gsap";

export const animateScale = (ref, parentSize, scaleRef) => {
  const calculateScale = () => {
    const maxWidth = 1440;
    const minWidth = 768;
    const width = Math.max(minWidth, Math.min(parentSize.width, maxWidth));
    return width / maxWidth / 2;
  };

  const scale = calculateScale();
  if (ref.current) {
    gsap.set(ref.current, { pixi: { scale: scale } });
  }
  scaleRef.current = scale;
};
