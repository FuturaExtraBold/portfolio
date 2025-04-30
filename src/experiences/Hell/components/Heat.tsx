import { type JSX } from "react";
import { useHell } from "../HellProvider";
import Background from "./Background";

export default function Heat(): JSX.Element | null {
  const {
    allTexturesLoaded,
    displacementFilter,
    displacementMapRef,
    parentSize,
    textures,
  } = useHell();

  if (!allTexturesLoaded || !textures.displacementMap) return null;

  return (
    <>
      <pixiContainer
        alpha={1}
        filters={displacementFilter ? [displacementFilter] : []}
        height={parentSize.height}
        width={parentSize.width}
      >
        <Background />
      </pixiContainer>

      {/* This is the displacement sprite, which is used to create the displacement effect
      It is positioned in the same place as the background sprite
      and has the same size as the background sprite
      The displacement sprite is animated to create a wave effect */}
      <pixiTilingSprite
        alpha={0}
        ref={displacementMapRef}
        texture={textures.displacementMap}
      />
    </>
  );
}
