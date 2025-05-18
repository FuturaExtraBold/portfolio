import { type JSX, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function BenzoBody(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();

  const benzoRef = useRef<Sprite | null>(null);

  if (!allTexturesLoaded || !textures.benzoBody) return null;

  return (
    <pixiSprite
      ref={benzoRef}
      width={parentSize.width}
      height={parentSize.height}
      texture={textures.benzoBody}
    />
  );
}
