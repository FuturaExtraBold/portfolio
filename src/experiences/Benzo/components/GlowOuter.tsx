import { type JSX, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { useGlowOuterAnimations } from "../hooks/animations";

export default function GlowOuter(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();
  const glowOuterRef = useRef<Sprite | null>(null);

  useGlowOuterAnimations({ glowOuterRef });

  if (!allTexturesLoaded || !textures.glowOuter) return null;

  return (
    <pixiSprite
      alpha={0.4}
      height={parentSize.height}
      ref={glowOuterRef}
      texture={textures.glowOuter}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
