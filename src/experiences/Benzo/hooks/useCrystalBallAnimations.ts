import { type RefObject, useEffect } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

import {
  animateRotation,
  animateTint,
  setPosition,
  setScale,
} from "utils/animation";

interface UseCrystalBallAnimationsProps {
  crystalBallRef: RefObject<Sprite | null>;
}

export default function useCrystalBallAnimations({
  crystalBallRef,
}: UseCrystalBallAnimationsProps): void {
  const { parentSize, scaleRef, colorCrystalBall, durationCrystalBall } =
    useBenzo();

  const getRotationParams = () => {
    const duration = Math.random() * 4 + 4;
    const origin = (45 + Math.random() * 10) / 100;
    return { duration, origin };
  };

  useEffect(() => {
    // console.log("Benzo - Crystal Ball - animateRotation");
    animateRotation({
      ...getRotationParams(),
      ref: crystalBallRef,
      rotationAmount: 360,
      repeat: true,
      getNextParams: getRotationParams,
    });
  }, [crystalBallRef]);

  useEffect(() => {
    // console.log("Benzo - Crystal Ball - animateTint");
    animateTint({
      color: colorCrystalBall,
      duration: durationCrystalBall,
      ref: crystalBallRef,
    });
  }, [colorCrystalBall, crystalBallRef, durationCrystalBall]);

  useEffect(() => {
    console.log("Benzo - Crystal Ball - setPosition");
    setPosition({
      ref: crystalBallRef,
      usePixi: true,
      x: parentSize.width / 2,
      y: parentSize.height - parentSize.height / 6,
    });
  }, [crystalBallRef, parentSize]);

  useEffect(() => {
    console.log("Benzo - Crystal Ball - setScale");
    setScale({
      ref: crystalBallRef,
      parentSize: parentSize,
      minScale: 0.22,
      maxScale: 0.5,
      scaleRef,
    });
  }, [crystalBallRef, parentSize, scaleRef]);
}
