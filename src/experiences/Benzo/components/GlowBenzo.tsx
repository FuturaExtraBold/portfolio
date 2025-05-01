import { type JSX, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { useGlowBenzoAnimations } from "../hooks/animations";

export default function GlowBenzo(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();

  const glowBenzoRef = useRef<Sprite | null>(null);

  useGlowBenzoAnimations({ glowBenzoRef });

  if (!allTexturesLoaded || !textures.glowBenzo) return null;

  return (
    <pixiSprite
      alpha={0.6}
      height={parentSize.height}
      ref={glowBenzoRef}
      texture={textures.glowBenzo}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
