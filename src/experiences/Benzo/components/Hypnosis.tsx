import { type JSX, useEffect, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { animateRotation, animateScale, setScale } from "utils/animation";

export default function Hypnosis(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, scaleRef, textures } = useBenzo();
  const hypnosisRef = useRef<Sprite | null>(null);

  const getRotationParams = () => {
    const duration = Math.random() * 4 + 16;
    const origin = Math.random() * 0.02 + 0.48;
    return { duration, origin };
  };

  useEffect(() => {
    console.log("Benzo - Hypnosis - animateRotation");
    animateRotation({
      ...getRotationParams(),
      ref: hypnosisRef,
      ease: "none",
      getNextParams: getRotationParams,
      repeat: true,
    });
  }, []);

  useEffect(() => {
    console.log("Benzo - Hypnosis - setScale");
    setScale({
      ref: hypnosisRef,
      parentSize: parentSize,
      minScale: 0.5,
      maxScale: 1,
      minWidth: 768,
      maxWidth: 1440,
      scaleRef,
    });
  }, [parentSize, scaleRef]);

  useEffect(() => {
    console.log("Benzo - Hypnosis - animateScale");
    const baseScale = scaleRef.current ?? 1;
    animateScale({
      duration: 4,
      ref: hypnosisRef,
      scaleAmount: baseScale * 0.5,
      ease: "sine.inOut",
    });
  }, [scaleRef]);

  if (!allTexturesLoaded || !textures.hypnosis) return null;

  return (
    <pixiSprite
      anchor={0.5}
      height={1800}
      ref={hypnosisRef}
      scale={scaleRef.current ?? 1}
      texture={textures.hypnosis}
      width={1800}
      x={parentSize.width / 2}
      y={parentSize.height / 2}
    />
  );
}
