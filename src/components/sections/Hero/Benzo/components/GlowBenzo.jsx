import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Assets, Texture } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import imageGlowBenzo from "../../../../../assets/images/benzo/benzo.png";

export default function GlowBenzo() {
  const refGlowBenzo = useRef(null);

  const [textureGlowBenzo, setTextureGlowBenzo] = useState(Texture.EMPTY);

  const { colorCrystalBall, durationCrystalBall, parentSize } = useBenzo();

  useEffect(() => {
    if (textureGlowBenzo === Texture.EMPTY) {
      Assets.load(imageGlowBenzo).then((result) => {
        result.source.autoGenerateMipmaps = true;
        setTextureGlowBenzo(result);
      });
    }
  }, [textureGlowBenzo]);

  useEffect(() => {
    if (refGlowBenzo.current) {
      gsap.to(refGlowBenzo.current, {
        pixi: { tint: colorCrystalBall },
        duration: durationCrystalBall,
      });
    }
  }, [colorCrystalBall, durationCrystalBall]);

  return (
    <pixiSprite
      alpha="0.6"
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
