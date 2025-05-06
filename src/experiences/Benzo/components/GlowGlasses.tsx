import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function GlowGlasses(): JSX.Element | null {
  const { allTexturesLoaded, glowProps, parentSize, textures } = useBenzo();

  const glowGlassesRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!glowGlassesRef.current) return;
    gsap.to(glowGlassesRef.current, {
      pixi: { tint: glowProps.color },
      duration: glowProps.duration,
    });
  }, [glowProps, glowGlassesRef]);

  if (!allTexturesLoaded || !textures.glowGlasses) return null;

  return (
    <pixiSprite
      alpha={1}
      height={parentSize.height}
      ref={glowGlassesRef}
      texture={textures.glowGlasses}
      tint={0xffffff}
      width={parentSize.width}
    />
  );
}
