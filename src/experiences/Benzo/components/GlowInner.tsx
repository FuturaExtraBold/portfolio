import { type JSX, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { useGlowInnerAnimations } from "../hooks/animations";

export default function GlowInner(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();
  const glowInnerRef = useRef<Sprite | null>(null);

  useGlowInnerAnimations({ glowInnerRef });

  if (!allTexturesLoaded || !textures.glowInner) return null;

  return (
    <pixiSprite
      alpha={1}
      height={parentSize.height}
      ref={glowInnerRef}
      texture={textures.glowInner}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
