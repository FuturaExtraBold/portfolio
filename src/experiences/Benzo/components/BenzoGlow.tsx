import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { setPosition, setScale } from "utils/animation";

export default function BenzoGlow(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, scaleRef, smokeProps, textures } =
    useBenzo();

  const benzoGlowRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!benzoGlowRef.current || !allTexturesLoaded) return;
    gsap.to(benzoGlowRef.current, {
      pixi: { tint: smokeProps.color },
      duration: smokeProps.duration,
    });
  }, [allTexturesLoaded, benzoGlowRef, smokeProps]);

  useEffect(() => {
    if (!benzoGlowRef.current || !allTexturesLoaded) return;
    setScale({
      ref: benzoGlowRef,
      parentSize: parentSize,
      minScale: 0.25,
      maxScale: 0.5,
      scaleRef,
    });
  }, [allTexturesLoaded, benzoGlowRef, parentSize, scaleRef]);

  useEffect(() => {
    if (!benzoGlowRef.current || !allTexturesLoaded) return;
    setPosition({
      ref: benzoGlowRef,
      usePixi: true,
      x: parentSize.width / 2 - benzoGlowRef.current.width / 2,
      y: parentSize.height - benzoGlowRef.current.height,
    });
  }, [allTexturesLoaded, benzoGlowRef, parentSize, scaleRef]);

  if (!allTexturesLoaded || !textures.benzoGlow) return null;

  return (
    <pixiSprite alpha={0.5} ref={benzoGlowRef} texture={textures.benzoGlow} />
  );
}
