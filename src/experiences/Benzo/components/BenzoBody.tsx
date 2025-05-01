import { type JSX } from "react";
import { useBenzo } from "../BenzoProvider";

export default function BenzoBody(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();

  if (!allTexturesLoaded || !textures.benzoBody) return null;

  return (
    <pixiSprite
      alpha={1}
      height={parentSize.height}
      texture={textures.benzoBody}
      width={parentSize.width}
    />
  );
}
