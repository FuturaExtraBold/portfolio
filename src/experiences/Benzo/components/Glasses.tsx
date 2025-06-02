import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function Glasses(): JSX.Element | null {
  const { allTexturesLoaded, glowProps, parentSize, textures } = useBenzo();

  const glassesRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!glassesRef.current || !allTexturesLoaded) return;
    gsap.to(glassesRef.current, {
      pixi: { tint: glowProps.color },
      duration: glowProps.duration,
    });
  }, [allTexturesLoaded, glowProps, glassesRef]);

  if (!allTexturesLoaded || !textures.glasses) return null;

  return (
    <pixiSprite
      alpha={0.2}
      ref={glassesRef}
      texture={textures.glasses}
      tint={0xffffff}
      width={parentSize.width}
      height={parentSize.height}
    />
  );
}
