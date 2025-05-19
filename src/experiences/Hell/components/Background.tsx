import { type JSX } from "react";
import { useHell } from "../HellProvider";

export default function Background(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useHell();

  if (!allTexturesLoaded || !textures.hell) return null;

  return (
    <pixiSprite
      height={parentSize.height}
      texture={textures.hell}
      width={parentSize.width}
    />
  );
}
