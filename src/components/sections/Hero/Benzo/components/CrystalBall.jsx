import { useEffect, useRef } from "react";
import { useBenzo } from "../BenzoProvider";

export default function CrystalBall() {
  const refCrystalBall = useRef(null);

  const {
    allTexturesLoaded,
    animateRotation,
    animateTint,
    colorCrystalBall,
    durationCrystalBall,
    parentSize,
    scaleRef,
    setPosition,
    setScale,
    textures,
  } = useBenzo();

  useEffect(() => {
    if (refCrystalBall.current) {
      animateRotation({
        duration: Math.random() * 4 + 4,
        origin: (45 + Math.random() * 10) / 100,
        ref: refCrystalBall,
      });
    }
  }, [animateRotation]);

  useEffect(() => {
    if (refCrystalBall.current) {
      animateTint({
        color: colorCrystalBall,
        duration: durationCrystalBall,
        ref: refCrystalBall,
      });
    }
  }, [animateTint, colorCrystalBall, durationCrystalBall]);

  useEffect(() => {
    if (refCrystalBall.current) {
      setPosition({
        ref: refCrystalBall,
        usePixi: true,
        x: parentSize.width / 2,
        y: parentSize.height - parentSize.height / 6,
      });
    }
  }, [setPosition, parentSize]);

  useEffect(() => {
    if (refCrystalBall.current) {
      setScale({
        ref: refCrystalBall,
        parentSize: parentSize,
        minScale: 0.22,
        maxScale: 0.5,
        scaleRef,
      });
    }
  }, [parentSize, scaleRef, setScale]);

  if (!allTexturesLoaded || !textures.crystalBall) return null;

  return (
    <pixiSprite
      alpha={0.96}
      anchor={0.5}
      height={250}
      ref={refCrystalBall}
      texture={textures.crystalBall}
      tint="#ffffff"
      width={250}
    />
  );
}
