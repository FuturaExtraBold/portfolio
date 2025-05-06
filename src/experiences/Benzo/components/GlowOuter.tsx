import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function GlowOuter(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, smokeProps, textures } = useBenzo();
  const glowOuterRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!glowOuterRef) return;
    // console.log("Benzo - Glow Outer - GSAP Tint");
    gsap.to(glowOuterRef.current, {
      pixi: { tint: smokeProps.color },
      duration: smokeProps.duration,
    });
  }, [smokeProps, glowOuterRef]);

  if (!allTexturesLoaded || !textures.glowOuter) return null;

  return (
    <pixiSprite
      alpha={0.4}
      height={parentSize.height}
      ref={glowOuterRef}
      texture={textures.glowOuter}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
