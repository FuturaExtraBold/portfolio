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
  const [centerX, setCenterX] = useState(0);
  const titleRef = useRef<Sprite | null>(null);
  const letterRefs = useRef<Record<string, Sprite | null>>({});
  const spacing = 10;

  const spritesheet = useMemo(() => {
    if (!textures.title || !textures.title.source) return null;
    return new Spritesheet(textures.title.source, titleAtlas);
  }, [textures.title]);

  useEffect(() => {
    if (!spritesheet) return;
    spritesheet.parse().then(() => {
      console.log("spritesheet", spritesheet);
      setParsedSpritesheet(spritesheet);
    });
  }, [spritesheet]);

  useEffect(() => {
    if (!parsedSpritesheet) return;
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
      });
    });
  }, [parsedSpritesheet]);

  useEffect(() => {
    if (!titleRef.current || !parsedSpritesheet) return;
    const { width } = titleRef.current.getLocalBounds();
    console.log("width", width);
    console.log("parentSize", parentSize);
    setCenterX(parentSize.width / 2 - (width / 2) * scaleRef.current);
  }, [parentSize, parsedSpritesheet, scaleRef, titleRef]);

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

  useEffect(() => {
    if (!titleRef) return;
    console.log("Benzo - Title - setScale");
    setScale({
      ref: titleRef,
      parentSize: parentSize,
      minScale: 0.25,
      maxScale: 0.5,
      scaleRef,
    });
  }, [titleRef, parentSize, scaleRef]);

  if (!allTexturesLoaded || !textures.title || !textures.title.source)
    return null;

  return (
    <pixiContainer anchor={0.5} ref={titleRef} x={centerX} y={20}>
      {renderedLetters}
    </pixiContainer>
  );
}
