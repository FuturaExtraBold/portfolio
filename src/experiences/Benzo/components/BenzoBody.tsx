import { type JSX, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function BenzoBody(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();

  const refBenzoBody = useRef<Sprite | null>(null);

  const texture = textures.benzoBody;

  if (!allTexturesLoaded || !texture) return null;

  return (
    <pixiSprite
      alpha={1}
      height={parentSize.height}
      ref={refBenzoBody}
      texture={texture}
      width={parentSize.width}
    />
  );
}
