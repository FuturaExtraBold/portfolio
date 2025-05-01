import { type RefObject, useEffect } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

import {
  animateRotation,
  animateScale,
  animateTick,
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

// Glow Inner animations
interface UseGlowInnerAnimationsProps {
  glowInnerRef: RefObject<Sprite | null>;
}

export function useGlowInnerAnimations({
  glowInnerRef,
}: UseGlowInnerAnimationsProps): void {
  const { colorSmoke, durationSmoke } = useBenzo();

  useEffect(() => {
    gsap.to(glowInnerRef.current, {
      pixi: { tint: colorSmoke },
      duration: durationSmoke,
    });
  }, [colorSmoke, durationSmoke, glowInnerRef]);
}

// Glow Outer animations
interface UseGlowOuterAnimationsProps {
  glowOuterRef: RefObject<Sprite | null>;
}

export function useGlowOuterAnimations({
  glowOuterRef,
}: UseGlowOuterAnimationsProps): void {
  const { colorSmoke, durationSmoke } = useBenzo();

  useEffect(() => {
    gsap.to(glowOuterRef.current, {
      pixi: { tint: colorSmoke },
      duration: durationSmoke,
    });
  }, [colorSmoke, durationSmoke, glowOuterRef]);
}

// Hand Left animations
interface UseHandLeftAnimationsProps {
  handLeftRef: RefObject<Sprite | null>;
}

export function useHandLeftAnimations({
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
    animateTint({
      color: colorCrystalBall,
      duration: durationCrystalBall,
      ref: handLeftRef,
    });
  }, [colorCrystalBall, durationCrystalBall, handLeftRef]);

  useEffect(() => {
    if (!handLeftRef.current) return;
    setPosition({
      ref: handLeftRef,
      usePixi: true,
      x: parentSize.width / 2 - parentSize.width / 6.75,
      y: parentSize.height - handLeftRef.current.height / 2,
    });
  }, [handLeftRef, parentSize]);

  useEffect(() => {
    setScale({
      ref: handLeftRef,
      parentSize: parentSize,
      minScale: 0.25,
      maxScale: 0.5,
      scaleRef,
    });
  }, [handLeftRef, parentSize, scaleRef]);
}

// Hand Right animations
interface UseHandRightAnimationsProps {
  handRightRef: RefObject<Sprite | null>;
}

export function useHandRightAnimations({
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
    animateTint({
      color: colorCrystalBall,
      duration: durationCrystalBall,
      ref: handRightRef,
    });
  }, [colorCrystalBall, durationCrystalBall, handRightRef]);

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
    setScale({
      ref: handRightRef,
      parentSize: parentSize,
      minScale: 0.25,
      maxScale: 0.5,
      scaleRef,
    });
  }, [handRightRef, parentSize, scaleRef]);
}

// Hypnosis animations
interface UseHypnosisAnimationsProps {
  hypnosisRef: RefObject<Sprite | null>;
}

export function useHypnosisAnimations({
  hypnosisRef,
}: UseHypnosisAnimationsProps): void {
  const { parentSize, scaleRef } = useBenzo();

  useEffect(() => {
    animateRotation({
      duration: 20,
      ref: hypnosisRef,
      ease: "none",
      repeat: true,
    });
  }, [hypnosisRef]);

  useEffect(() => {
    setScale({
      ref: hypnosisRef,
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
      ref: hypnosisRef,
      scaleAmount: baseScale * 0.5,
      ease: "sine.inOut",
      repeat: true,
    });
  }, [hypnosisRef, parentSize, scaleRef]);
}
