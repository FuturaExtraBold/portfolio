import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { cloneElement, type JSX, useEffect, useRef } from "react";
import { setScale } from "utils/animation";

import { useBenzo } from "../BenzoProvider";

export default function BenzoTitle(): JSX.Element | null {
  const {
    allTexturesLoaded,
    parentSize,
    scaleRef,
    textures,
    renderedLetters,
    renderedPatternLetters,
  } = useBenzo();

  const titleRef = useRef<Sprite | null>(null);
  const greatRef = useRef<Sprite | null>(null);
  const letterRefs = useRef<Record<string, Sprite | null>>({});
  const patternRef = useRef<Sprite | null>(null);
  const patternLetterRefs = useRef<Record<string, Sprite | null>>({});

  const titleAnimsRef = useRef<(gsap.core.Tween | gsap.core.Timeline)[]>([]);

  useEffect(() => {
    if (!renderedLetters || !renderedPatternLetters || !greatRef.current)
      return;

    const rafId = requestAnimationFrame(() => {
      const letters = ["B", "E", "N", "Z", "O"];
      const anims: (gsap.core.Tween | gsap.core.Timeline)[] = [];

      letters.forEach((letter, index) => {
        const sprite = letterRefs.current[letter];
        if (sprite) {
          gsap.set(sprite, {
            pixi: { alpha: 0 },
            y: -200,
          });
          anims.push(
            gsap.to(sprite, {
              pixi: { alpha: 1 },
              y: 0,
              ease: "back.out(3)",
              duration: 0.2 + index * 0.1,
              delay: 2 + index * 0.025,
            }),
          );
        }

        const patternSprite = patternLetterRefs.current[letter];
        if (patternSprite) {
          anims.push(
            gsap.fromTo(
              patternSprite,
              { pixi: { alpha: 0 } },
              {
                pixi: { alpha: 2 },
                duration: 2,
                delay: 3 + index * 0.1,
                repeat: -1,
              },
            ),
          );
        }
      });

      // Animate greatRef once, outside the loop
      if (greatRef.current) {
        anims.push(
          gsap.fromTo(
            greatRef.current,
            {
              pixi: { alpha: 0 },
              x: -(8 * scaleRef.current),
              y: 20,
            },
            {
              pixi: { alpha: 1 },
              y: 0,
              duration: 0.2,
              delay: 3,
            },
          ),
        );
      }

      titleAnimsRef.current = anims;
    });

    return () => {
      cancelAnimationFrame(rafId);
      titleAnimsRef.current.forEach((a) => a.kill());
      titleAnimsRef.current = [];
    };
  }, [renderedPatternLetters, renderedLetters, scaleRef]);

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
      x: parentSize.width / 2 - patternRef.current.width / 2,
      y: 20,
    });
  }, [patternRef, titleRef, parentSize, scaleRef]);

  if (!allTexturesLoaded || !renderedLetters || !renderedPatternLetters) {
    return null;
  }

  return (
    <pixiContainer>
      <pixiSprite
        alpha={0}
        ref={greatRef}
        texture={textures.titleGreat}
        width={parentSize.width}
        height={parentSize.height}
      />
      <pixiContainer anchor={0.5} ref={titleRef}>
        {renderedLetters.map((sprite, _index) =>
          cloneElement(sprite, {
            ref: (el: Sprite | null) => {
              const letter = sprite.key as string;
              letterRefs.current[letter] = el;
            },
            key: sprite.key,
          }),
        )}
      </pixiContainer>
      <pixiContainer anchor={0.5} ref={patternRef}>
        {renderedPatternLetters.map((sprite, _index) =>
          cloneElement(sprite, {
            ref: (el: Sprite | null) => {
              const letter = sprite.key as string;
              patternLetterRefs.current[letter] = el;
            },
            key: sprite.key,
          }),
        )}
      </pixiContainer>
    </pixiContainer>
  );
}
