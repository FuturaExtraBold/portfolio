import { type JSX } from "react";
import { useLighthouse } from "../LighthouseProvider";

const Beam = (): JSX.Element | null => {
  const { allTexturesLoaded, beamRef, parentSize, textures } = useLighthouse();

  if (!allTexturesLoaded || !textures.beam) return null;

  return (
    <pixiSprite
      alpha={0.8}
      anchor={{ x: 0, y: 0.5 }}
      height={parentSize.height}
      ref={beamRef}
      scale={{ x: 0.5, y: 10 }}
      y={166}
      texture={textures.beam}
      width={parentSize.width}
    />
  );
};

export default Beam;
