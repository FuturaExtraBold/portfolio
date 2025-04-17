import { type JSX, useEffect, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function Hypnosis(): JSX.Element | null {
  const {
    allTexturesLoaded,
    parentSize,
    animateRotation,
    animateScale,
    setScale,
    scaleRef,
    textures,
  } = useBenzo();

  const refHypnosis = useRef<Sprite | null>(null);

  useEffect(() => {
    if (refHypnosis.current) {
      animateRotation({
        duration: 20,
        ref: refHypnosis,
        ease: "none",
        repeat: true,
      });
    }
  }, [animateRotation]);

  useEffect(() => {
    if (refHypnosis.current) {
      setScale({
        ref: refHypnosis,
        parentSize: parentSize,
        minScale: 0.5,
        maxScale: 1,
        minWidth: 768,
        maxWidth: 1440,
        scaleRef,
      });

      const baseScale = scaleRef.current ?? 1;
      animateScale({
        duration: 4,
        ref: refHypnosis,
        scaleAmount: baseScale * 0.5,
        ease: "sine.inOut",
        repeat: true,
      });
    }
  }, [animateScale, parentSize, setScale, scaleRef]);

  if (!allTexturesLoaded || !textures.hypnosis) return null;

  return (
    <pixiSprite
      anchor={0.5}
      height={1800}
      ref={refHypnosis}
      scale={scaleRef.current ?? 1}
      texture={textures.hypnosis}
      width={1800}
      x={parentSize.width / 2}
      y={parentSize.height / 2}
    />
  );
}
