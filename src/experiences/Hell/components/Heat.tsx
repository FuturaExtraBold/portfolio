import React, { type JSX, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { DisplacementFilter, Sprite, Texture, TilingSprite } from "pixi.js";
import { useHell } from "../HellProvider";
import Background from "./Background";

export default function Heat(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useHell();

  const tilingRef = useRef<TilingSprite | null>(null);
  const [displacementFilter, setDisplacementFilter] =
    useState<DisplacementFilter | null>(null);

  useEffect(() => {
    if (!textures.displacementMap) return;

    // Create the driver Sprite using the loaded texture
    const driverSprite = new Sprite(textures.displacementMap);
    const filter = new DisplacementFilter(driverSprite);
    setDisplacementFilter(filter);

    gsap.to(driverSprite, {
      duration: 3,
      repeat: -1,
      ease: "none",
      x: -512,
    });

    gsap.to(driverSprite, {
      duration: 8,
      repeat: -1,
      ease: "none",
      y: -512,
    });

    return () => {
      gsap.killTweensOf(driverSprite);
    };
  }, [textures.displacementMap]);

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
      <pixiTilingSprite
        alpha={0}
        ref={tilingRef}
        texture={textures.displacementMap as Texture}
        width={parentSize.width * 2}
        height={parentSize.height * 2}
        x={0}
        y={0}
      />
    </>
  );
}
