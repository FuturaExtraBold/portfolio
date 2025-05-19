import { type JSX, useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { Sprite, Spritesheet } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { titleAtlas } from "../data/titleAtlas";
import { setScale } from "utils/animation";

export default function BenzoTitle(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, scaleRef, textures } = useBenzo();

  const [parsedSpritesheet, setParsedSpritesheet] =
    useState<Spritesheet | null>(null);
  const [parsedPatternSpritesheet, setParsedPatternSpritesheet] =
    useState<Spritesheet | null>(null);
  const titleRef = useRef<Sprite | null>(null);
  const letterRefs = useRef<Record<string, Sprite | null>>({});
  const patternRef = useRef<Sprite | null>(null);
  const patternLetterRefs = useRef<Record<string, Sprite | null>>({});
  const spacing = 10;

  const spritesheet = useMemo(() => {
    if (!textures.title || !textures.title.source) return null;
    return new Spritesheet(textures.title.source, titleAtlas);
  }, [textures.title]);

  const patternSpritesheet = useMemo(() => {
    if (!textures.titlePattern || !textures.titlePattern.source) return null;
    return new Spritesheet(textures.titlePattern.source, titleAtlas);
  }, [textures.titlePattern]);

  const renderedLetters = useMemo(() => {
    if (!parsedSpritesheet) return null;
    const letters = ["B", "E", "N", "Z", "O"] as const;

    return letters.map((letter, index) => {
      let x = titleAtlas.frames[letter].frame.x - spacing * index;
      if (letter === "O") x -= 26;
      const frameTexture =
        parsedSpritesheet.textures[
          letter as keyof typeof parsedSpritesheet.textures
        ];
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
  }, [parsedSpritesheet, spacing]);

  const renderedPatternLetters = useMemo(() => {
    if (!parsedPatternSpritesheet) return null;
    const letters = ["B", "E", "N", "Z", "O"] as const;

    return letters.map((letter, index) => {
      let x = titleAtlas.frames[letter].frame.x - spacing * index;
      if (letter === "O") x -= 26;
      const frameTexture =
        parsedPatternSpritesheet.textures[
          letter as keyof typeof parsedPatternSpritesheet.textures
        ];
      return (
        <pixiSprite
          alpha={0}
          anchor={0}
          key={letter}
          ref={(el) => {
            patternLetterRefs.current[letter] = el;
          }}
          texture={frameTexture}
          x={x}
          y={0}
        />
      );
    });
  }, [parsedPatternSpritesheet, spacing]);

  useEffect(() => {
    if (!spritesheet) return;
    spritesheet.parse().then(() => {
      setParsedSpritesheet(spritesheet);
    });
  }, [spritesheet]);

  useEffect(() => {
    if (!patternSpritesheet) return;
    patternSpritesheet.parse().then(() => {
      setParsedPatternSpritesheet(patternSpritesheet);
    });
  }, [patternSpritesheet]);

  useEffect(() => {
    if (!parsedSpritesheet || !parsedPatternSpritesheet) return;

    requestAnimationFrame(() => {
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

        const patternSprite = patternLetterRefs.current[letter];
        if (patternSprite) {
          gsap.fromTo(
            patternSprite,
            {
              pixi: { alpha: 0 },
            },
            {
              pixi: { alpha: 2 },
              duration: 2,
              delay: 3 + index * 0.1,
              repeat: -1,
            }
          );
        }
      });
    });
  }, [parsedPatternSpritesheet, parsedSpritesheet]);

  useEffect(() => {
    if (!titleRef.current || !patternRef.current) return;
    setScale({
      ref: titleRef,
      parentSize: parentSize,
      minScale: 0.225,
      maxScale: 0.5,
      scaleRef,
    });

    setScale({
      ref: patternRef,
      parentSize: parentSize,
      minScale: 0.225,
      maxScale: 0.5,
      scaleRef,
    });
  }, [patternRef, titleRef, parentSize, scaleRef]);

  useEffect(() => {
    if (!titleRef.current || !patternRef.current) return;

    gsap.set(titleRef.current, {
      x: parentSize.width / 2 - titleRef.current.width / 2,
      y: 20,
    });

    gsap.set(patternRef.current, {
      x: parentSize.width / 2 - titleRef.current.width / 2,
      y: 20,
    });
  }, [patternRef, titleRef, parentSize]);

  if (
    !allTexturesLoaded ||
    !textures.title ||
    !textures.title.source ||
    !textures.titlePattern ||
    !textures.titlePattern.source
  ) {
    return null;
  }

  return (
    <pixiContainer>
      <pixiContainer anchor={0.5} ref={titleRef}>
        {renderedLetters}
      </pixiContainer>
      <pixiContainer anchor={0.5} ref={patternRef}>
        {renderedPatternLetters}
      </pixiContainer>
    </pixiContainer>
  );
}
