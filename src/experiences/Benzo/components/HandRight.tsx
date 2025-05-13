import { type JSX, useEffect, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import {
  animateTick,
  animateTint,
  setPosition,
  setScale,
} from "utils/animation";

export default function HandRight(): JSX.Element | null {
  const {
    allTexturesLoaded,
    glowProps,
    parentSize,
    parentSizeRef,
    scaleRef,
    textures,
  } = useBenzo();
  const handRightRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!handRightRef) return;
    animateTick({
      amplitudeX: 20,
      amplitudeY: 10,
      baseXAmount: -6.75,
      baseYAmount: 2,
      offsetYAmount: 120,
      ref: handRightRef,
      parentSizeRef,
      rotationRange: 240,
      scaleRef,
      tickTime: 0.009,
    });
  }, [handRightRef, parentSizeRef, scaleRef]);

  useEffect(() => {
    if (!handRightRef) return;
    animateTint({
      color: glowProps.color,
      duration: glowProps.duration,
      ref: handRightRef,
    });
  }, [glowProps, handRightRef]);

  useEffect(() => {
    if (!handRightRef.current) return;
    setPosition({
      ref: handRightRef,
      usePixi: true,
      x: parentSize.width / 2 - parentSize.width / -6.75,
      y: parentSize.height - handRightRef.current.height / 2,
    });
  }, [handRightRef, parentSize]);

  useEffect(() => {
    if (!handRightRef) return;
    setScale({
      ref: handRightRef,
      parentSize: parentSize,
      minScale: 0.25,
      maxScale: 0.5,
      scaleRef,
    });
  }, [handRightRef, parentSize, scaleRef]);

  if (!allTexturesLoaded || !textures.handRight) return null;

  return (
    <pixiSprite
      alpha={1}
      anchor={0.5}
      ref={handRightRef}
      scale={0.5}
      texture={textures.handRight}
      tint={0xffffff}
    />
  );
}
