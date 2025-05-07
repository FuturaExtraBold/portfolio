import { type JSX, useEffect, useMemo, useRef, useState } from "react";
import { Sprite, Spritesheet } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { titleAtlas } from "../data/titleAtlas";

export default function BenzoTitle(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();

  const [parsedSpritesheet, setParsedSpritesheet] =
    useState<Spritesheet | null>(null);
  const titleRef = useRef<Sprite | null>(null);
  const spacing = 96;

  const spritesheet = useMemo(() => {
    console.log("textures.title", textures.title);
    return new Spritesheet(textures.title.source, titleAtlas);
  }, [textures.title]);

  const renderedLetters = useMemo(() => {
    if (!parsedSpritesheet) return null;
    const letters = ["B", "E", "N", "Z", "O"] as const;

    return letters.map((letter, index) => {
      const x = titleAtlas.frames[letter].frame.x - spacing * index;
      const frameTexture =
        parsedSpritesheet.textures[letter as keyof typeof spritesheet.textures];
      return (
        <pixiSprite
          key={letter}
          alpha={0.2}
          anchor={0}
          texture={frameTexture}
          x={x}
          y={0}
        />
      );
    });
  }, [parsedSpritesheet, spacing, spritesheet]);

  const centerX = useMemo(() => {
    if (!titleRef.current) return 0;
    const { width } = titleRef.current.getLocalBounds();
    return parentSize.width / 2 - (width * 0.25) / 2;
  }, [parentSize, titleRef]);

  useEffect(() => {
    if (!spritesheet) return;
    spritesheet.parse().then(() => {
      console.log("spritesheet", spritesheet);
      setParsedSpritesheet(spritesheet);
    });
  }, [spritesheet]);

  if (!allTexturesLoaded) return null;

  return (
    <pixiContainer ref={titleRef} scale={0.25} x={centerX} y={25}>
      {renderedLetters}
    </pixiContainer>
  );
}
