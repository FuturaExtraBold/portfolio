import { type JSX, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { DisplacementFilter, Sprite } from "pixi.js";
import { useHell } from "../HellProvider";
import Background from "./Background";

export default function Heat(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, parentSizeRef, textures } = useHell();

  const [displacementFilter, setDisplacementFilter] =
    useState<DisplacementFilter | null>(null);

  const displacementSpriteRef = useRef(null);

  useEffect(() => {
    if (!displacementSpriteRef.current) return;
    var displacementSprite = new Sprite(displacementSpriteRef.current);
    var displacementFilter = new DisplacementFilter(displacementSprite);
    setDisplacementFilter(displacementFilter);

    gsap.to(displacementSpriteRef.current, {
      ease: "none",
      duration: 3,
      repeat: -1,
      x: -512,
    });

    gsap.to(displacementSpriteRef.current, {
      ease: "none",
      duration: 8,
      repeat: -1,
      y: -512,
    });
  }, [displacementSpriteRef, parentSizeRef]);

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
        ref={displacementSpriteRef}
        texture={textures.displacementMap}
      />
    </>
  );
}
