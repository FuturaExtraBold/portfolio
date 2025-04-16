import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { DisplacementFilter, Sprite } from "pixi.js";
import { useHell } from "../HellProvider";
import Background from "./Background";

export default function Heat() {
  const { allTexturesLoaded, parentSize, textures } = useHell();

  const [displacementFilter, setDisplacementFilter] = useState(null);

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
  }, [displacementSpriteRef, parentSize]);

  if (!allTexturesLoaded || !textures.displacementMap) return null;

  return (
    <pixiContainer
      alpha={1}
      eventMode={"static"}
      filters={[displacementFilter]}
      height={parentSize.height}
      width={parentSize.width}
    >
      <Background />
      <pixiTilingSprite
        alpha={0}
        ref={displacementSpriteRef}
        height={parentSize.height * 2}
        texture={textures.displacementMap}
        width={parentSize.width * 2}
      />
    </pixiContainer>
  );
}
