import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function GlowInner(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, smokeProps, textures } = useBenzo();
  const glowInnerRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!glowInnerRef) return;
    // console.log("Benzo - Glow Inner - GSAP Tint");
    gsap.to(glowInnerRef.current, {
      pixi: { tint: smokeProps.color },
      duration: smokeProps.duration,
    });
  }, [glowInnerRef, smokeProps]);

  if (!allTexturesLoaded || !textures.glowInner) return null;

  return (
    <pixiSprite
      alpha={0.8}
      height={parentSize.height}
      ref={glowInnerRef}
      texture={textures.glowInner}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
