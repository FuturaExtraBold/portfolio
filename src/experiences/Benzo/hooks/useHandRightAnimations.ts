import { type RefObject, useEffect } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

import {
  animateTick,
  animateTint,
  setPosition,
  setScale,
} from "utils/animation";

interface UseHandRightAnimationsProps {
  handRightRef: RefObject<Sprite | null>;
}

export default function useHandRightAnimations({
  handRightRef,
}: UseHandRightAnimationsProps): void {
  const {
    colorCrystalBall,
    durationCrystalBall,
    parentSize,
    parentSizeRef,
    scaleRef,
  } = useBenzo();

  useEffect(() => {
    console.log("Benzo - Hand Right - animateTick");
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
    // console.log("Benzo - Hand Right - animateTint");
    animateTint({
      color: colorCrystalBall,
      duration: durationCrystalBall,
      ref: handRightRef,
    });
  }, [colorCrystalBall, durationCrystalBall, handRightRef]);

  useEffect(() => {
    if (!handRightRef.current) return;
    console.log("Benzo - Hand Right - setPosition");
    setPosition({
      ref: handRightRef,
      usePixi: true,
      x: parentSize.width / 2 - parentSize.width / -6.75,
      y: parentSize.height - handRightRef.current.height / 2,
    });
  }, [handRightRef, parentSize]);

  useEffect(() => {
    console.log("Benzo - Hand Right - setScale");
    setScale({
      ref: handRightRef,
      parentSize: parentSize,
      minScale: 0.25,
      maxScale: 0.5,
      scaleRef,
    });
  }, [handRightRef, parentSize, scaleRef]);
}
