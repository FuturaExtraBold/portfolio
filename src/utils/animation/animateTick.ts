import type { AnimateTickOptions } from "utils/animation";
import { gsap } from "gsap";

export const animateTick = ({
  amplitudeX = 10,
  amplitudeY = 5,
  baseXAmount,
  baseYAmount,
  ref,
  offsetYAmount,
  parentSizeRef,
  rotationRange = 360,
  scaleRef,
  tickTime = 0.01,
}: AnimateTickOptions) => {
  if (!ref.current) {
    console.warn("animateTick ref.current is not defined");
    return;
  }

  let time = 0;

  const baseX = () =>
    parentSizeRef.current!.width / 2 -
    parentSizeRef.current!.width / baseXAmount;
  const baseY = () =>
    parentSizeRef.current!.height - (ref.current as any).height / baseYAmount;

  const offScreenBottomOffset = (ref.current as any).height / 2 - offsetYAmount;

  const tick = () => {
    time += tickTime;
    const resolvedAX = amplitudeX * scaleRef.current! * 2;
    const resolvedAY = amplitudeY * scaleRef.current! * 2;
    const offsetX = Math.sin(time * 0.8) * resolvedAX;
    const offsetY = Math.cos(time * 0.6) * resolvedAY;
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
