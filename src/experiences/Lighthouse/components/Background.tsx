import { type JSX } from "react";
import { useLighthouse } from "../LighthouseProvider";

const Background = (): JSX.Element | null => {
  const { allTexturesLoaded, parentSize, textures } = useLighthouse();

  if (!allTexturesLoaded || !textures.lighthouse) return null;

  return (
    <pixiSprite
      alpha={1}
      height={parentSize.height}
      texture={textures.lighthouse}
      width={parentSize.width}
    />
  );
};

export default Background;
