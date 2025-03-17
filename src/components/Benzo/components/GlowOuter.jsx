import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Assets, Texture } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import imageGlowOuter from "../../../assets/images/benzo/glow_outer.png";

export default function GlowOuter() {
  const refGlowOuter = useRef(null);

  const [textureGlowOuter, setTextureGlowOuter] = useState(Texture.EMPTY);

  const { glowColors, parentSize } = useBenzo();

  useEffect(() => {
    if (textureGlowOuter === Texture.EMPTY) {
      Assets.load(imageGlowOuter).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("glow outer texture loaded", result);
        setTextureGlowOuter(result);
      });
    }
  }, [textureGlowOuter]);

  useEffect(() => {
    if (refGlowOuter.current) {
      const flicker = () => {
        const randColor =
          glowColors[Math.floor(Math.random() * glowColors.length)];
        const randDuration = Math.random() * 1 + 0.5;

        gsap.to(refGlowOuter.current, {
          pixi: { tint: randColor },
          duration: randDuration,
          onComplete: flicker,
        });
      };
      flicker();
    }
  }, [glowColors, refGlowOuter]);

  return (
    <pixiSprite
      alpha="0.8"
      eventMode={"static"}
      height={parentSize.height}
      ref={refGlowOuter}
      scale={0.5}
      texture={textureGlowOuter}
      tint="#ffffff"
      width={parentSize.width}
    />
  );
}
