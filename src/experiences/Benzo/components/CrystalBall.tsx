import { type JSX, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { useCrystalBallAnimations } from "../hooks/animations";

export default function CrystalBall(): JSX.Element | null {
  const { allTexturesLoaded, textures } = useBenzo();
  const crystalBallRef = useRef<Sprite | null>(null);

  useCrystalBallAnimations({ crystalBallRef });

  if (!allTexturesLoaded || !textures.crystalBall) return null;

  return (
    <pixiSprite
      alpha={0.96}
      anchor={0.5}
      height={250}
      ref={crystalBallRef}
      texture={textures.crystalBall}
      tint={0xffffff}
      width={250}
    />
  );
}
