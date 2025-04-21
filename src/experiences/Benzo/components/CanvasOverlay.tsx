import { type JSX } from "react";
import { useBenzo } from "../BenzoProvider";

export default function CanvasOverlay(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();

  if (!allTexturesLoaded || !textures.canvasOverlay) return null;

  return (
    <pixiSprite
      alpha={0.5}
      blendMode="multiply"
      height={parentSize.height}
      texture={textures.canvasOverlay}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
