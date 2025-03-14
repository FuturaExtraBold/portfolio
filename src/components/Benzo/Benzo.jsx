import React, { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Assets, Texture } from "pixi.js";
import imageBenzo from "../../assets/images/benzo/benzo.png";
import imageGlasses from "../../assets/images/benzo/glasses.png";
import imageGlow from "../../assets/images/benzo/glow.png";
import imageGlowInner from "../../assets/images/benzo/glow_inner.png";
import imageMagic from "../../assets/images/benzo/magic.jpg";

export function Benzo({ parentRef }) {
  // The Pixi.js `Sprite`
  const refBenzo = useRef(null);
  const refGlasses = useRef(null);
  const refGlow = useRef(null);
  const refGlowInner = useRef(null);
  const refMagic = useRef(null);

  const [textureBenzo, setTextureBenzo] = useState(Texture.EMPTY);
  const [textureGlasses, setTextureGlasses] = useState(Texture.EMPTY);
  const [textureGlow, setTextureGlow] = useState(Texture.EMPTY);
  const [textureGlowInner, setTextureGlowInner] = useState(Texture.EMPTY);
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
    if (textureGlowInner === Texture.EMPTY) {
      Assets.load(imageGlowInner).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("glow inner texture loaded", result);
        setTextureGlowInner(result);
      });
    }
  }, [textureGlowInner]);

  useEffect(() => {
    if (textureBenzo === Texture.EMPTY) {
      Assets.load(imageBenzo).then((result) => {
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
      Assets.load(imageMagic).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("magic texture loaded", result);
        setTextureMagic(result);
      });
    }
  }, [textureMagic]);

  // useEffect(() => {
  //   if (refBenzo.current) {
  //     console.log("kaboom", refBenzo);
  //     gsap.to(refBenzo.current, {
  //       tint: "0xff0000",
  //       duration: 1,
  //       yoyo: true,
  //     });
  //   }
  // }, []);

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
        alpha="0.8"
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
        alpha="0.8"
        eventMode={"static"}
        height={parentSize.height}
        onClick={(event) => setIsActive(!isActive)}
        ref={refGlowInner}
        roundPixels={true}
        texture={textureGlowInner}
        tint="#00ff00"
        width={parentSize.width}
      />
      <pixiSprite
        alpha="0.8"
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
