import { type JSX, useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { Sprite, Spritesheet } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { titleAtlas } from "../data/titleAtlas";

export default function BenzoTitle(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();

  const [parsedSpritesheet, setParsedSpritesheet] =
    useState<Spritesheet | null>(null);
  const [centerX, setCenterX] = useState(0);
  const titleRef = useRef<Sprite | null>(null);
  const letterRefs = useRef<Record<string, Sprite | null>>({});
  const spacing = 10;
  const scale = 0.5;

  const spritesheet = useMemo(() => {
    console.log("textures.title", textures.title);
    return new Spritesheet(textures.title.source, titleAtlas);
  }, [textures.title]);

  const renderedLetters = useMemo(() => {
    if (!parsedSpritesheet) return null;
    const letters = ["B", "E", "N", "Z", "O"] as const;

    return letters.map((letter, index) => {
      let x = titleAtlas.frames[letter].frame.x - spacing * index;
      if (letter === "O") x -= 26;
      const frameTexture =
        parsedSpritesheet.textures[letter as keyof typeof spritesheet.textures];
      return (
        <pixiSprite
          alpha={0}
          anchor={0}
          key={letter}
          ref={(el) => {
            letterRefs.current[letter] = el;
          }}
          texture={frameTexture}
          x={x}
          y={0}
        />
      );
    });
  }, [parsedSpritesheet, spacing, spritesheet]);

  useEffect(() => {
    if (!titleRef.current) return;
    const { width } = titleRef.current.getLocalBounds();
    setCenterX(parentSize.width / 2 - (width * scale) / 2);
  }, [parentSize, titleRef]);

  useEffect(() => {
    if (!spritesheet) return;
    spritesheet.parse().then(() => {
      console.log("spritesheet", spritesheet);
      setParsedSpritesheet(spritesheet);
    });
  }, [spritesheet]);

  useEffect(() => {
    if (!parsedSpritesheet) return;
    const letters = ["B", "E", "N", "Z", "O"];
    letters.forEach((letter, index) => {
      const sprite = letterRefs.current[letter];
      if (sprite) {
        gsap.set(sprite, {
          pixi: { alpha: 0 },
          y: -200,
        });
        gsap.to(sprite, {
          pixi: { alpha: 1 },
          y: 0,
          ease: "back.out(3)",
          duration: 0.2 + index * 0.1,
          delay: 2 + index * 0.025,
        });
      }
    });
  }, [parsedSpritesheet]);

  if (!allTexturesLoaded) return null;

  return (
    <pixiContainer ref={titleRef} scale={scale} x={centerX} y={20}>
      {renderedLetters}
    </pixiContainer>
  );
}
