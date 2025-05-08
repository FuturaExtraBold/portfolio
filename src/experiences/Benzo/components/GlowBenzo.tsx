import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { setPosition, setScale } from "utils/animation";

export default function GlowBenzo(): JSX.Element | null {
  const { allTexturesLoaded, glowProps, parentSize, scaleRef, textures } =
    useBenzo();
  const glowBenzoRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!glowBenzoRef) return;
    // console.log("Benzo - Glow Benzo - GSAP Tint");
    gsap.to(glowBenzoRef.current, {
      pixi: { tint: glowProps.color },
      duration: glowProps.duration,
    });
  }, [glowBenzoRef, glowProps]);

  useEffect(() => {
    if (!glowBenzoRef) return;
    console.log("Benzo - Glow Glasses - setScale");
    setScale({
      ref: glowBenzoRef,
      parentSize: parentSize,
      minScale: 0.25,
      maxScale: 0.5,
      scaleRef,
    });
  }, [glowBenzoRef, parentSize, scaleRef]);

  useEffect(() => {
    if (!glowBenzoRef.current) return;
    console.log("Benzo - Glow Glasses - setPosition");
    setPosition({
      ref: glowBenzoRef,
      usePixi: true,
      x: parentSize.width / 2 - glowBenzoRef.current.width / 2,
      y: parentSize.height - glowBenzoRef.current.height,
    });
  }, [glowBenzoRef, parentSize, scaleRef]);

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
