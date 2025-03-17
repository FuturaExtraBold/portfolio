import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Assets, Texture } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import imageGlowGlasses from "../../../assets/images/benzo/glow_glasses.png";

export default function GlowGlasses() {
  const refGlowGlasses = useRef(null);

  const [textureGlowGlasses, setTextureGlowGlasses] = useState(Texture.EMPTY);

  const { glowColors, parentSize } = useBenzo();

  useEffect(() => {
    if (textureGlowGlasses === Texture.EMPTY) {
      Assets.load(imageGlowGlasses).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("glow glasses texture loaded", result);
        setTextureGlowGlasses(result);
      });
    }
  }, [textureGlowGlasses]);

  useEffect(() => {
    if (refGlowGlasses.current) {
      const flicker = () => {
        const randColor =
          glowColors[Math.floor(Math.random() * glowColors.length)];
        const randDuration = Math.random() * 1 + 0.5;

        gsap.to(refGlowGlasses.current, {
          pixi: { tint: randColor },
          duration: randDuration,
          onComplete: flicker,
        });
      };
      flicker();
    }
  }, [glowColors, refGlowGlasses]);

  return (
    <pixiSprite
      alpha="0.8"
      eventMode={"static"}
      height={parentSize.height}
      ref={refGlowGlasses}
      scale={0.5}
      texture={textureGlowGlasses}
      tint="#ffffff"
      width={parentSize.width}
    />
  );
}
