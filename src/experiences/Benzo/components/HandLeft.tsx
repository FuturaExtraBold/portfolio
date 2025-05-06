import { type JSX, useEffect, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import {
  animateTick,
  animateTint,
  setPosition,
  setScale,
} from "utils/animation";

export default function HandLeft(): JSX.Element | null {
  const {
    allTexturesLoaded,
    glowProps,
    parentSize,
    parentSizeRef,
    scaleRef,
    textures,
  } = useBenzo();
  const handLeftRef = useRef<Sprite | null>(null);

  useEffect(() => {
    console.log("Benzo - Hand Left - animateTick");
    if (!handLeftRef) return;
    animateTick({
      amplitudeX: 20,
      amplitudeY: 10,
      baseXAmount: 6.75,
      baseYAmount: 2,
      offsetYAmount: 120,
      ref: handLeftRef,
      parentSizeRef,
      rotationRange: 240,
      scaleRef,
      tickTime: 0.015,
    });
  }, [handLeftRef, parentSizeRef, scaleRef]);

  useEffect(() => {
    if (!handLeftRef) return;
    // console.log("Benzo - Hand Left - animateTint");
    animateTint({
      color: glowProps.color,
      duration: glowProps.duration,
      ref: handLeftRef,
    });
  }, [glowProps, handLeftRef]);

  useEffect(() => {
    if (!handLeftRef.current) return;
    console.log("Benzo - Hand Left - setPosition");
    setPosition({
      ref: handLeftRef,
      usePixi: true,
      x: parentSize.width / 2 - parentSize.width / 6.75,
      y: parentSize.height - handLeftRef.current.height / 2,
    });
  }, [handLeftRef, parentSize]);

  useEffect(() => {
    if (!handLeftRef) return;
    console.log("Benzo - Hand Left - setScale");
    setScale({
      ref: handLeftRef,
      parentSize: parentSize,
      minScale: 0.25,
      maxScale: 0.5,
      scaleRef,
    });
  }, [handLeftRef, parentSize, scaleRef]);

  if (!allTexturesLoaded || !textures.handLeft) return null;

  return (
    <pixiSprite
      alpha={1}
      anchor={0.5}
      ref={handLeftRef}
      scale={0.5}
      texture={textures.handLeft}
      tint={0xffffff}
    />
  );
}
