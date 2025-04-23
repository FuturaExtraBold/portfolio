import { type JSX } from "react";
import { useLighthouse } from "../LighthouseProvider";

export default function Background(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useLighthouse();

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
