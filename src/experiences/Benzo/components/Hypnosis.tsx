import { type JSX, useEffect, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { animateRotation } from "utils/animation";

export default function Hypnosis(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();
  const hypnosisRef = useRef<Sprite | null>(null);

  const getRotationParams = () => {
    const duration = Math.random() * 4 + 10;
    const origin = 0.5;
    return { duration, origin };
  };

  useEffect(() => {
    if (!hypnosisRef.current || !allTexturesLoaded) return;
    animateRotation({
      ...getRotationParams(),
      ref: hypnosisRef,
      ease: "none",
      getNextParams: getRotationParams,
      repeat: true,
    });
  }, [allTexturesLoaded, hypnosisRef]);

  if (!allTexturesLoaded || !textures.hypnosis) return null;

  return (
    <pixiSprite
      anchor={0.5}
      // scale={0.5}
      ref={hypnosisRef}
      texture={textures.hypnosis}
      width={parentSize.width * 1.3}
      height={parentSize.width * 1.3}
      x={parentSize.width / 2}
      y={parentSize.height / 2}
    />
  );
}
