import { type RefObject, useEffect } from "react";
import { gsap } from "gsap";
import type { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

import {
  animateRotation,
  animateTint,
  setPosition,
  setScale,
} from "utils/animation";

// Crystal ball animations
interface UseCrystalBallAnimationsProps {
  crystalBallRef: RefObject<Sprite | null>;
}

export function useCrystalBallAnimations({
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
    console.log("animateRotation");
    animateRotation({
      ...getRotationParams(),
      ref: crystalBallRef,
      rotationAmount: 360,
      repeat: true,
      getNextParams: getRotationParams,
    });
  }, [crystalBallRef]);

  useEffect(() => {
    console.log("this should be called once");
  }, []);

  useEffect(() => {
    animateTint({
      color: colorCrystalBall,
      duration: durationCrystalBall,
      ref: crystalBallRef,
    });
  }, [colorCrystalBall, crystalBallRef, durationCrystalBall]);

  useEffect(() => {
    setPosition({
      ref: crystalBallRef,
      usePixi: true,
      x: parentSize.width / 2,
      y: parentSize.height - parentSize.height / 6,
    });
  }, [crystalBallRef, parentSize]);

  useEffect(() => {
    setScale({
      ref: crystalBallRef,
      parentSize: parentSize,
      minScale: 0.22,
      maxScale: 0.5,
      scaleRef,
    });
  }, [crystalBallRef, parentSize, scaleRef]);
}

// Title animations
interface UseTitleAnimationsProps {
  titleRef: RefObject<Sprite | null>;
}

export function useTitleAnimations({
  titleRef,
}: UseTitleAnimationsProps): void {
  const { parentSize, scaleRef } = useBenzo();

  useEffect(() => {
    setPosition({
      ref: titleRef,
      usePixi: true,
      x: parentSize.width / 2,
      y: 0.175 * parentSize.height,
    });
  }, [titleRef, parentSize]);

  useEffect(() => {
    setScale({
      ref: titleRef,
      parentSize: parentSize,
      minScale: 0.22,
      maxScale: 0.5,
      scaleRef,
    });
  }, [titleRef, parentSize, scaleRef]);
}

// Glow Benzo animations
interface UseGlowBenzoAnimationsProps {
  glowBenzoRef: RefObject<Sprite | null>;
}

export function useGlowBenzoAnimations({
  glowBenzoRef,
}: UseGlowBenzoAnimationsProps): void {
  const { colorCrystalBall, durationCrystalBall } = useBenzo();

  useEffect(() => {
    gsap.to(glowBenzoRef.current, {
      pixi: { tint: colorCrystalBall },
      duration: durationCrystalBall,
    });
  }, [colorCrystalBall, durationCrystalBall, glowBenzoRef]);
}

// Glow Glasses animations
interface UseGlowGlassesAnimationsProps {
  glowGlassesRef: RefObject<Sprite | null>;
}
export function useGlowGlassesAnimations({
  glowGlassesRef,
}: UseGlowGlassesAnimationsProps): void {
  const { colorCrystalBall, durationCrystalBall } = useBenzo();

  useEffect(() => {
    gsap.to(glowGlassesRef.current, {
      pixi: { tint: colorCrystalBall },
      duration: durationCrystalBall,
    });
  }, [colorCrystalBall, durationCrystalBall, glowGlassesRef]);
}
