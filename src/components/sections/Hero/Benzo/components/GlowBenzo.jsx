import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Assets, Texture } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import imageGlowBenzo from "../../../../../assets/images/benzo/benzo.png";

export default function GlowBenzo() {
  const refGlowBenzo = useRef(null);

  const [textureGlowBenzo, setTextureGlowBenzo] = useState(Texture.EMPTY);

  const { glowColors, parentSize } = useBenzo();

  useEffect(() => {
    if (textureGlowBenzo === Texture.EMPTY) {
      Assets.load(imageGlowBenzo).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("glow benzo texture loaded", result);
        setTextureGlowBenzo(result);
      });
    }
  }, [textureGlowBenzo]);

  useEffect(() => {
    if (refGlowBenzo.current) {
      const flicker = () => {
        const randColor =
          glowColors[Math.floor(Math.random() * glowColors.length)];
        const randDuration = Math.random() * 1 + 0.5;

        gsap.to(refGlowBenzo.current, {
          pixi: { tint: randColor },
          duration: randDuration,
          onComplete: flicker,
        });
      };
      flicker();
    }
  }, [glowColors, refGlowBenzo]);

  return (
    <pixiSprite
      alpha="0.8"
      eventMode={"static"}
      height={parentSize.height}
      ref={refGlowBenzo}
      scale={0.5}
      texture={textureGlowBenzo}
      tint="#ffffff"
      width={parentSize.width}
    />
  );
}
