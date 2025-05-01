import { type JSX, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { useHandLeftAnimations } from "../hooks/animations";

export default function HandLeft(): JSX.Element | null {
  const { allTexturesLoaded, textures } = useBenzo();
  const handLeftRef = useRef<Sprite | null>(null);

  useHandLeftAnimations({ handLeftRef });

  if (!allTexturesLoaded || !textures.handLeft) return null;

  return (
    <pixiSprite
      alpha={1}
      anchor={0.5}
      ref={handLeftRef}
      scale={0.5}
      texture={textures.handLeft}
      tint={0xffffff}
    />
  );
}
