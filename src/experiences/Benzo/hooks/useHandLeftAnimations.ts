import { type RefObject, useEffect } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

import {
  animateTick,
  animateTint,
  setPosition,
  setScale,
} from "utils/animation";

interface UseHandLeftAnimationsProps {
  handLeftRef: RefObject<Sprite | null>;
}

export default function useHandLeftAnimations({
  handLeftRef,
}: UseHandLeftAnimationsProps): void {
  const {
    colorCrystalBall,
    durationCrystalBall,
    parentSize,
    parentSizeRef,
    scaleRef,
  } = useBenzo();

  useEffect(() => {
    console.log("Benzo - Hand Left - animateTick");
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
    console.log("Benzo - Hand Left - animateTint");
    animateTint({
      color: colorCrystalBall,
      duration: durationCrystalBall,
      ref: handLeftRef,
    });
  }, [colorCrystalBall, durationCrystalBall, handLeftRef]);

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
    console.log("Benzo - Hand Left - setScale");
    setScale({
      ref: handLeftRef,
      parentSize: parentSize,
      minScale: 0.25,
      maxScale: 0.5,
      scaleRef,
    });
  }, [handLeftRef, parentSize, scaleRef]);
}
