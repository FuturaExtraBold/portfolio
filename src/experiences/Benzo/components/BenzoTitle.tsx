import { type JSX, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { useTitleAnimations } from "../hooks/animations";

export default function BenzoTitle(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();
  const titleRef = useRef<Sprite | null>(null);

  useTitleAnimations({ titleRef });

  if (!allTexturesLoaded || !textures.benzoTitle) return null;

  return (
    <pixiSprite
      alpha={1}
      anchor={0.5}
      ref={titleRef}
      scale={0.5}
      texture={textures.benzoTitle}
      x={parentSize.width / 2}
      y={180}
    />
  );
}
