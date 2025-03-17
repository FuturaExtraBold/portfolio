import React, { useEffect, useRef, useState } from "react";
import { Assets, Texture } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import imageBenzoBody from "../../../assets/images/benzo/benzo.png";

export default function BenzoBody() {
  const refBenzoBody = useRef(null);

  const [textureBenzoBody, setTextureBenzoBody] = useState(Texture.EMPTY);

  const { parentSize } = useBenzo();

  useEffect(() => {
    if (textureBenzoBody === Texture.EMPTY) {
      Assets.load(imageBenzoBody).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("benzo body texture loaded", result);
        setTextureBenzoBody(result);
      });
    }
  }, [textureBenzoBody]);

  return (
    <pixiSprite
      eventMode={"static"}
      height={parentSize.height}
      ref={refBenzoBody}
      scale={0.5}
      texture={textureBenzoBody}
      width={parentSize.width}
    />
  );
}
