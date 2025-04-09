import { gsap } from "gsap";

export const animateTick = (ref, parentSize, scaleRef) => {
  if (!ref.current) return;

  let time = 0;
  const rotationRange = 30;

  const baseX = () => parentSize.width / 2 - parentSize.width / 6.75;
  const baseY = () => parentSize.height - ref.current.height / 2;
  const offScreenBottomOffset = ref.current.height / 2 + 10;

  const tick = () => {
    time += 0.01;

    const amplitudeX = 20 * scaleRef.current * 2;
    const amplitudeY = 10 * scaleRef.current * 2;

    const offsetX = Math.sin(time * 0.8) * amplitudeX;
    const offsetY = Math.cos(time * 0.6) * amplitudeY;

    const yPosition = baseY() + offsetY - offScreenBottomOffset;
    const rotation = Math.sin(time * 0.3) * ((rotationRange * Math.PI) / 180);

    gsap.set(ref.current, {
      pixi: {
        x: baseX() + offsetX,
        y: yPosition,
        rotation,
      },
    });
  };

  gsap.ticker.add(tick);

  return () => {
    gsap.ticker.remove(tick);
  };
};
