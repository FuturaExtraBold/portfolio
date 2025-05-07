import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function BenzoTitle(): JSX.Element | null {
  const { allTexturesLoaded, parentSizeRef, textures } = useBenzo();
  const titleRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    gsap.from(titleRef.current, {
      duration: 0.5,
      ease: "back.out",
      pixi: { alpha: 0 },
      y: -200,
    });
  }, [titleRef]);

  if (!allTexturesLoaded || !textures.title) return null;

  const titleW = textures.title.width;
  const titleH = textures.title.height;
  const parentW = parentSizeRef.current.width;
  const parentH = parentSizeRef.current.height;
  const titleX = parentW / 2 - titleW / 8;
  const titleY = parentH / 2 - titleH / 8;

  return (
    <pixiContainer>
      <pixiSprite
        alpha={1}
        ref={titleRef}
        texture={textures.title}
        height={titleH / 4}
        width={titleW / 4}
        x={titleX}
        y={titleY}
      />
    </pixiContainer>
  );
}
