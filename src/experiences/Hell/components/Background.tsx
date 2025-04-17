import { type JSX } from "react";
import { useHell } from "../HellProvider";

export default function Background(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useHell();

  if (!allTexturesLoaded || !textures.hellBackground) return null;

  return (
    <pixiSprite
      alpha={1}
      eventMode={"static"}
      height={parentSize.height}
      texture={textures.hellBackground}
      width={parentSize.width}
    />
  );
}
