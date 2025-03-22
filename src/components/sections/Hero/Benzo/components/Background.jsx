import React, { useEffect, useRef, useState } from "react";
import { Assets, Texture } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import imageBackground from "../../../../../assets/images/benzo/background.jpg";

export default function Background() {
  const refBackground = useRef(null);

  const [textureBackground, setTextureBackground] = useState(Texture.EMPTY);

  const { parentSize } = useBenzo();

  useEffect(() => {
    if (textureBackground === Texture.EMPTY) {
      Assets.load(imageBackground).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("background texture loaded", result);
        setTextureBackground(result);
      });
    }
  }, [textureBackground]);

  return (
    <pixiSprite
      alpha={1}
      eventMode={"static"}
      height={parentSize.height}
      ref={refBackground}
      texture={textureBackground}
      width={parentSize.width}
    />
  );
}
