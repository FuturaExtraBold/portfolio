import React, { useEffect, useRef, useState } from "react";
import { Assets, Texture } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import imageBackground from "../../../assets/images/benzo/background.jpg";

export function Background() {
  const refBackground = useRef(null);

  const [textureBackground, setTextureBackground] = useState(Texture.EMPTY);

  const { parentSize } = useBenzo();

  useEffect(() => {
    if (textureBackground === Texture.EMPTY) {
      Assets.load(imageBackground).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("Background texture loaded", result);
        setTextureBackground(result);
      });
    }
  }, [textureBackground]);

  return (
    <pixiSprite
      eventMode={"static"}
      height={parentSize.height}
      ref={refBackground}
      roundPixels={true}
      texture={textureBackground}
      width={parentSize.width}
    />
  );
}
