import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Assets, Texture } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import imageGlowGlasses from "../../../../../assets/images/benzo/glow_glasses.png";

export default function GlowGlasses() {
  const refGlowGlasses = useRef(null);

  const [textureGlowGlasses, setTextureGlowGlasses] = useState(Texture.EMPTY);

  const { colorCrystalBall, durationCrystalBall, parentSize } = useBenzo();

  useEffect(() => {
    if (textureGlowGlasses === Texture.EMPTY) {
      Assets.load(imageGlowGlasses).then((result) => {
        result.source.autoGenerateMipmaps = true;
        setTextureGlowGlasses(result);
      });
    }
  }, [textureGlowGlasses]);

  useEffect(() => {
    if (refGlowGlasses.current) {
      gsap.to(refGlowGlasses.current, {
        pixi: { tint: colorCrystalBall },
        duration: durationCrystalBall,
      });
    }
  }, [colorCrystalBall, durationCrystalBall, refGlowGlasses]);

  return (
    <pixiSprite
      alpha="1"
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
