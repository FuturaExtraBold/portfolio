import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function GlowBenzo(): JSX.Element | null {
  const { allTexturesLoaded, glowProps, parentSize, textures } = useBenzo();
  const glowBenzoRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!glowBenzoRef) return;
    // console.log("Benzo - Glow Benzo - GSAP Tint");
    gsap.to(glowBenzoRef.current, {
      pixi: { tint: glowProps.color },
      duration: glowProps.duration,
    });
  }, [glowBenzoRef, glowProps]);

  if (!allTexturesLoaded || !textures.benzoBody) return null;

  return (
    <pixiSprite
      alpha={0.6}
      height={parentSize.height}
      ref={glowBenzoRef}
      texture={textures.benzoBody}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
