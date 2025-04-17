import React from "react";
import { useBenzo } from "../BenzoProvider";

export default function CanvasOverlay() {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();

  if (!allTexturesLoaded || !textures.canvasOverlay) return null;

  return (
    <pixiSprite
      alpha="0.5"
      blendMode="multiply"
      eventMode={"static"}
      height={parentSize.height}
      texture={textures.canvasOverlay}
      tint="#ffffff"
      width={parentSize.width}
    />
  );
}
