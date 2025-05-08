import { type JSX, useEffect, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { animateRotation } from "utils/animation";

export default function Hypnosis(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, scaleRef, textures } = useBenzo();
  const hypnosisRef = useRef<Sprite | null>(null);

  const getRotationParams = () => {
    const duration = Math.random() * 4 + 10;
    const origin = Math.random() * 0.03 + 0.47;
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
