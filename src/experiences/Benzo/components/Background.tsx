import { JSX } from "react";
import { useBenzo } from "../BenzoProvider";

export default function Background(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();

  if (!allTexturesLoaded || !textures.benzoBackground) return null;

  return (
    <pixiSprite
      alpha={1}
      height={parentSize.height}
      texture={textures.benzoBackground}
      width={parentSize.width}
    />
  );
}
