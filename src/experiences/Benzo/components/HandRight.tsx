import { type JSX, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { useHandRightAnimations } from "../hooks/animations";

export default function HandRight(): JSX.Element | null {
  const { allTexturesLoaded, textures } = useBenzo();
  const handRightRef = useRef<Sprite | null>(null);

  useHandRightAnimations({ handRightRef });

  if (!allTexturesLoaded || !textures.handRight) return null;

  return (
    <pixiSprite
      alpha={1}
      anchor={0.5}
      ref={handRightRef}
      scale={0.5}
      texture={textures.handRight}
      tint={0xffffff}
    />
  );
}
