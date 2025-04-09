import { useEffect, useRef } from "react";
import { useBenzo } from "../BenzoProvider";

export default function HandLeft() {
  const {
    allTexturesLoaded,
    animateTick,
    animateTint,
    colorCrystalBall,
    durationCrystalBall,
    parentSize,
    parentSizeRef,
    scaleRef,
    setPosition,
    setScale,
    textures,
  } = useBenzo();

  const handRef = useRef(null);

  useEffect(() => {
    if (handRef.current) {
      animateTick({
        amplitudeX: 10,
        amplitudeY: 5,
        baseXAmount: 6.75,
        baseYAmount: 2,
        offsetYAmount: 120,
        ref: handRef,
        parentSizeRef,
        rotationRange: 240,
        scaleRef,
        tickTime: 0.01,
      });
    }
  }, [animateTick, parentSizeRef, scaleRef]);

  useEffect(() => {
    if (handRef.current) {
      animateTint({
        color: colorCrystalBall,
        duration: durationCrystalBall,
        ref: handRef,
      });
    }
  }, [colorCrystalBall, durationCrystalBall, animateTint]);

  useEffect(() => {
    if (handRef.current) {
      setPosition({
        ref: handRef,
        usePixi: true,
        x: parentSize.width / 2 - parentSize.width / 6.75,
        y: parentSize.height - handRef.current.height / 2,
      });
    }
  }, [parentSize, setPosition]);

  useEffect(() => {
    if (handRef.current) {
      setScale({
        ref: handRef,
        parentSize: parentSize,
        minScale: 0.25,
        maxScale: 0.5,
        scaleRef,
      });
    }
  }, [parentSize, scaleRef, setScale]);

  if (!allTexturesLoaded || !textures.handLeft) return null;

  return (
    <pixiSprite
      alpha={1}
      anchor={0.5}
      scale={0.5}
      ref={handRef}
      texture={textures.handLeft}
      tint="#ffffff"
    />
  );
}
