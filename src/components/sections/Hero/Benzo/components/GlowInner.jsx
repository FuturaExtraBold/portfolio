import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Assets, Texture } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import imageGlowInner from "../../../../../assets/images/benzo/glow_inner.png";

export default function GlowInner() {
  const refGlowInner = useRef(null);

  const [textureGlowInner, setTextureGlowInner] = useState(Texture.EMPTY);

  const { glowColors, parentSize } = useBenzo();

  useEffect(() => {
    if (textureGlowInner === Texture.EMPTY) {
      Assets.load(imageGlowInner).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("glow inner texture loaded", result);
        setTextureGlowInner(result);
      });
    }
  }, [textureGlowInner]);

  useEffect(() => {
    if (refGlowInner.current) {
      const flicker = () => {
        const randColor =
          glowColors[Math.floor(Math.random() * glowColors.length)];
        const randDuration = Math.random() * 1 + 0.5;

        gsap.to(refGlowInner.current, {
          pixi: { tint: randColor },
          duration: randDuration,
          onComplete: flicker,
        });
      };
      flicker();
    }
  }, [glowColors, refGlowInner]);

  return (
    <pixiSprite
      alpha="0.8"
      eventMode={"static"}
      height={parentSize.height}
      ref={refGlowInner}
      scale={0.5}
      texture={textureGlowInner}
      tint="#ffffff"
      width={parentSize.width}
    />
  );
}
