import { type JSX, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { useGlowGlassesAnimations } from "../hooks/animations";

export default function GlowGlasses(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();
  const glowGlassesRef = useRef<Sprite | null>(null);

  useGlowGlassesAnimations({ glowGlassesRef });

  if (!allTexturesLoaded || !textures.glowGlasses) return null;

  return (
    <pixiSprite
      alpha={1}
      height={parentSize.height}
      ref={glowGlassesRef}
      texture={textures.glowGlasses}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
