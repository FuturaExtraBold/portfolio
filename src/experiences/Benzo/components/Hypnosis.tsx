import { type JSX, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { useHypnosisAnimations } from "../hooks/animations";

export default function Hypnosis(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, scaleRef, textures } = useBenzo();
  const hypnosisRef = useRef<Sprite | null>(null);

  useHypnosisAnimations({ hypnosisRef });

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
