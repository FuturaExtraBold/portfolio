import { type JSX } from "react";
import { useBenzo } from "../BenzoProvider";

export default function TextureOverlay(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();

  if (!allTexturesLoaded || !textures.textureOverlay) return null;

  return (
    <pixiSprite
      alpha={0.7}
      blendMode="multiply"
      height={parentSize.height}
      texture={textures.textureOverlay}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
