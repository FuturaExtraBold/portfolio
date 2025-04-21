import { type JSX } from "react";
import { useBenzo } from "../BenzoProvider";

const Background = (): JSX.Element | null => {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();

  if (!allTexturesLoaded || !textures.benzoBackground) return null;

  return (
    <pixiSprite
      alpha={1}
      texture={textures.benzoBackground}
      width={parentSize.width}
      height={parentSize.height}
    />
  );
};

export default Background;
