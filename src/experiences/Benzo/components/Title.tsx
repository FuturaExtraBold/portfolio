import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function Title(): JSX.Element | null {
  const { allTexturesLoaded, glowProps, parentSize, textures } = useBenzo();
  const titleRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!titleRef.current || !allTexturesLoaded) return;
    gsap.set(titleRef.current, {
      pixi: { alpha: 0 },
      y: -100,
    });
    gsap.to(titleRef.current, {
      pixi: { alpha: 1 },
      y: 0,
      ease: "back.out(3)",
      duration: 0.25,
      delay: 1,
    });
  }, [allTexturesLoaded, titleRef]);

  if (!allTexturesLoaded || !textures.titleNew) return null;

  return (
    <pixiSprite
      height={parentSize.height}
      ref={titleRef}
      texture={textures.titleNew}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
