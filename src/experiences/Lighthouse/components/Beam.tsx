import { type JSX } from "react";
import { useLighthouse } from "../LighthouseProvider";

export default function Beam(): JSX.Element | null {
  const {
    allTexturesLoaded,
    beamLeftRef,
    beamRightRef,
    parentSizeRef,
    textures,
  } = useLighthouse();

  const beamAlphaMax = 0.8;
  const beamAnchorY = 0.25;
  const beamAnchor = { x: 0, y: beamAnchorY };
  const psw = parentSizeRef.current.width;
  const psh = parentSizeRef.current.height;

  if (!allTexturesLoaded || !textures.beam) return null;

  return (
    <>
      <pixiSprite
        alpha={beamAlphaMax}
        anchor={beamAnchor}
        height={psh}
        ref={beamLeftRef}
        scale={0.5}
        texture={textures.beam}
        width={psw}
        x={0}
        y={psh * beamAnchorY}
      />
      <pixiSprite
        alpha={beamAlphaMax}
        anchor={beamAnchor}
        height={psh}
        ref={beamRightRef}
        scale={-0.5}
        texture={textures.beam}
        width={psw}
        x={psw}
        y={psh * beamAnchorY}
      />
    </>
  );
}
