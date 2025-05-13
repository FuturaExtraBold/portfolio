import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { setPosition, setScale } from "utils/animation";

export default function GlowGlasses(): JSX.Element | null {
  const { allTexturesLoaded, glowProps, parentSize, scaleRef, textures } =
    useBenzo();

  const glowGlassesRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!glowGlassesRef.current || !allTexturesLoaded) return;
    gsap.to(glowGlassesRef.current, {
      pixi: { tint: glowProps.color },
      duration: glowProps.duration,
    });
  }, [allTexturesLoaded, glowProps, glowGlassesRef]);

  useEffect(() => {
    if (!glowGlassesRef.current || !allTexturesLoaded) return;
    setScale({
      ref: glowGlassesRef,
      parentSize: parentSize,
      minScale: 0.25,
      maxScale: 0.5,
      scaleRef,
    });
  }, [allTexturesLoaded, glowGlassesRef, parentSize, scaleRef]);

  useEffect(() => {
    if (!glowGlassesRef.current || !allTexturesLoaded) return;
    setPosition({
      ref: glowGlassesRef,
      usePixi: true,
      x: parentSize.width / 2 - glowGlassesRef.current.width / 2,
      y: parentSize.height - glowGlassesRef.current.height,
    });
  }, [allTexturesLoaded, glowGlassesRef, parentSize, scaleRef]);

  if (!allTexturesLoaded || !textures.glowGlasses) return null;

  return (
    <pixiSprite
      alpha={1}
      ref={glowGlassesRef}
      texture={textures.glowGlasses}
      tint={0xffffff}
    />
  );
}
