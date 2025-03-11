import React, { useEffect, useRef, useState } from "react";
import { Assets, Texture } from "pixi.js";
import benzoImage from "../../assets/images/benzo.png"; // Adjust the path as needed

export function Benzo({ parentRef }) {
  // The Pixi.js `Sprite`
  const spriteRef = useRef(null);

  const [texture, setTexture] = useState(Texture.EMPTY);
  const [isActive, setIsActive] = useState(false);

  // Preload the sprite if it hasn't been loaded yet
  useEffect(() => {
    if (texture === Texture.EMPTY) {
      console.log("kaboom");
      Assets.load(benzoImage).then((result) => {
        console.log("result", result);
        setTexture(result);
      });
    }
  }, [texture]);

  useEffect(() => {
    if (texture !== Texture.EMPTY) {
      console.log(
        "parentRef.current.offsetWidth:",
        parentRef.current.offsetWidth
      );
      console.log(
        "parentRef.current.offsetHeight:",
        parentRef.current.offsetHeight
      );
    }
  }, [parentRef, texture]);

  // useEffect(() => {
  //   if (spriteRef.current) {
  //     if (isActive) {
  //       spriteRef.current.scale.set(1.2);
  //     } else {
  //       spriteRef.current.scale.set(1);
  //     }
  //   }
  // }, [isActive, spriteRef]);

  // if (!parentRef || !spriteRef) {
  //   return null;
  // }

  return (
    <pixiSprite
      ref={spriteRef}
      anchor={0.5}
      eventMode={"static"}
      onClick={(event) => setIsActive(!isActive)}
      scale={1}
      texture={texture}
      x={parentRef.current.offsetWidth / 2}
      y={parentRef.current.offsetHeight / 2}
    />
  );
}
