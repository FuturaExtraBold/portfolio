import React, { useCallback, useEffect, useRef, useState } from "react";
import { Assets, Texture } from "pixi.js";
import benzoImage from "../../assets/images/benzo/benzo.png";
import imageGlasses from "../../assets/images/benzo/glasses.png";
import imageGlow from "../../assets/images/benzo/glow.png";
import magicImage from "../../assets/images/benzo/magic.jpg";

export function Benzo({ parentRef }) {
  // The Pixi.js `Sprite`
  const refBenzo = useRef(null);
  const refGlasses = useRef(null);
  const refGlow = useRef(null);
  const refMagic = useRef(null);

  const [textureBenzo, setTextureBenzo] = useState(Texture.EMPTY);
  const [textureGlasses, setTextureGlasses] = useState(Texture.EMPTY);
  const [textureGlow, setTextureGlow] = useState(Texture.EMPTY);
  const [textureMagic, setTextureMagic] = useState(Texture.EMPTY);
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });
  const [isActive, setIsActive] = useState(false);

  const updateParentSize = useCallback(() => {
    const width = parentRef.current.clientWidth;
    const height = parentRef.current.clientHeight;
    setParentSize({ width, height });
  }, [parentRef]);

  useEffect(() => {
    window.addEventListener("resize", updateParentSize);
    updateParentSize();
  }, [updateParentSize]);

  // Preload the sprites if they haven't been loaded yet
  useEffect(() => {
    if (textureGlasses === Texture.EMPTY) {
      Assets.load(imageGlasses).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("glasses texture loaded", result);
        setTextureGlasses(result);
      });
    }
  }, [textureGlasses]);

  useEffect(() => {
    if (textureBenzo === Texture.EMPTY) {
      Assets.load(benzoImage).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("benzo texture loaded", result);
        setTextureBenzo(result);
      });
    }
  }, [textureBenzo]);

  useEffect(() => {
    if (textureGlow === Texture.EMPTY) {
      Assets.load(imageGlow).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("glow texture loaded", result);
        setTextureGlow(result);
      });
    }
  }, [textureGlow]);

  useEffect(() => {
    if (textureMagic === Texture.EMPTY) {
      Assets.load(magicImage).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("magic texture loaded", result);
        setTextureMagic(result);
      });
    }
  }, [textureMagic]);

  return (
    <pixiContainer>
      <pixiSprite
        eventMode={"static"}
        height={parentSize.height}
        onClick={(event) => setIsActive(!isActive)}
        ref={refMagic}
        roundPixels={true}
        texture={textureMagic}
        width={parentSize.width}
      />
      <pixiSprite
        alpha="0.4"
        eventMode={"static"}
        height={parentSize.height}
        onClick={(event) => setIsActive(!isActive)}
        ref={refGlow}
        texture={textureGlow}
        tint="#ff0000"
        width={parentSize.width}
      />
      <pixiSprite
        eventMode={"static"}
        height={parentSize.height}
        onClick={(event) => setIsActive(!isActive)}
        ref={refBenzo}
        texture={textureBenzo}
        width={parentSize.width}
      />
      <pixiSprite
        alpha="0.4"
        eventMode={"static"}
        height={parentSize.height}
        onClick={(event) => setIsActive(!isActive)}
        ref={refGlasses}
        texture={textureGlasses}
        tint="#00ff00"
        width={parentSize.width}
      />
    </pixiContainer>
  );
}
