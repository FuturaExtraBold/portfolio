import { useEffect, useMemo, useState } from "react";
import { Spritesheet, Texture } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { titleAtlas } from "../data/titleAtlas";

interface TitleLetterProps {
  letter: string;
  x: number;
  y: number;
  scale?: number;
}

export default function TitleLetter({
  letter,
  x,
  y,
  scale = 1,
}: TitleLetterProps) {
  const { allTexturesLoaded, textures } = useBenzo();

  const [letterTexture, setLetterTexture] = useState<Texture | null>(null);

  const spritesheet = useMemo(() => {
    // console.log("textures.title", textures.title);
    return new Spritesheet(textures.title.source, titleAtlas);
  }, [textures.title]);

  useEffect(() => {
    if (!spritesheet) return;
    spritesheet.parse().then(() => {
      console.log("spritesheet", spritesheet);
      const frameTexture =
        spritesheet.textures[letter as keyof typeof spritesheet.textures];
      if (frameTexture) {
        setLetterTexture(frameTexture);
      }
    });
  }, [letter, spritesheet]);

  if (!allTexturesLoaded || !letterTexture) return null;

  return (
    <pixiSprite
      alpha={0.2}
      anchor={0}
      scale={scale}
      texture={letterTexture}
      x={x}
      y={y}
    />
  );
}
