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
    if (!glowGlassesRef.current) return;
    gsap.to(glowGlassesRef.current, {
      pixi: { tint: glowProps.color },
      duration: glowProps.duration,
    });
  }, [glowProps, glowGlassesRef]);

  useEffect(() => {
    if (!glowGlassesRef) return;
    console.log("Benzo - Glow Glasses - setScale");
    setScale({
      ref: glowGlassesRef,
      parentSize: parentSize,
      minScale: 0.27,
      maxScale: 0.5,
      scaleRef,
    });
  }, [glowGlassesRef, parentSize, scaleRef]);

  useEffect(() => {
    if (!glowGlassesRef.current) return;
    console.log("Benzo - Glow Glasses - setPosition");
    setPosition({
      ref: glowGlassesRef,
      usePixi: true,
      x: parentSize.width / 2 - glowGlassesRef.current.width / 2,
      y:
        parentSize.height / 2 -
        glowGlassesRef.current.height / 2 -
        22 * scaleRef.current * 2,
    });
  }, [glowGlassesRef, parentSize, scaleRef]);

  if (!allTexturesLoaded || !textures.glowGlasses) return null;

  return (
    <pixiSprite
      alpha={0.5}
      ref={glowGlassesRef}
      texture={textures.glowGlasses}
      tint={0xffffff}
    />
  );
}
