import { type JSX, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function BenzoBody(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();

  const refBenzoBody = useRef<Sprite | null>(null);

  if (!allTexturesLoaded || !textures.benzoBody) return null;

  return (
    <pixiSprite
      height={parentSize.height}
      ref={refBenzoBody}
      texture={textures.benzoBody}
      width={parentSize.width}
    />
  );
}
