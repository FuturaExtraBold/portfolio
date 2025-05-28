import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function TheGreat(): JSX.Element | null {
  const { allTexturesLoaded, glowProps, parentSize, textures } = useBenzo();
  const theGreatRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!theGreatRef.current || !allTexturesLoaded) return;
    gsap.set(theGreatRef.current, {
      pixi: { alpha: 0 },
      y: 40,
    });
    gsap.to(theGreatRef.current, {
      pixi: { alpha: 1 },
      y: 0,
      ease: "expo.inOut(3)",
      duration: 0.5,
      delay: 0.93,
    });
  }, [allTexturesLoaded, theGreatRef]);

  if (!allTexturesLoaded || !textures.theGreat) return null;

  return (
    <pixiSprite
      height={parentSize.height}
      ref={theGreatRef}
      texture={textures.theGreat}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
