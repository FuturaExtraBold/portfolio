import { gsap } from "gsap";
import { Container, Sprite } from "pixi.js";
import { type JSX, useEffect, useRef } from "react";
import {
  animateFloat,
  animateRotation,
  animateTint,
  setPosition,
} from "utils/animation";
import { useBenzo } from "../BenzoProvider";

export default function CrystalBall(): JSX.Element | null {
  const { allTexturesLoaded, glowProps, parentSize, textures } = useBenzo();
  const crystalBallContainerRef = useRef<Container | null>(null);
  const crystalBallRef = useRef<Sprite | null>(null);
  const crystalBallAlternateRef = useRef<Sprite | null>(null);
  const reflectionRef = useRef<Sprite | null>(null);

  const getRotationParams = () => {
    const duration = Math.random() * 4 + 4;
    const origin = 0.5;
    return { duration, origin };
  };

  useEffect(() => {
    if (!allTexturesLoaded) return;
    if (crystalBallRef.current) {
      animateRotation({
        ...getRotationParams(),
        ref: crystalBallRef,
        rotationAmount: 360,
        repeat: true,
        getNextParams: getRotationParams,
      });
    }
    if (crystalBallAlternateRef.current) {
      animateRotation({
        ...getRotationParams(),
        ref: crystalBallAlternateRef,
        rotationAmount: -360,
        repeat: true,
        getNextParams: getRotationParams,
      });
    }
    return () => {
      if (crystalBallRef.current) {
        gsap.killTweensOf(crystalBallRef.current);
      }
      if (crystalBallAlternateRef.current) {
        gsap.killTweensOf(crystalBallAlternateRef.current);
      }
    };
  }, [allTexturesLoaded]);

  useEffect(() => {
    if (!allTexturesLoaded) return;
    const refs = [crystalBallAlternateRef, crystalBallRef];
    refs.forEach((ref) => {
      if (!ref.current) return;
      animateTint({
        color: glowProps.color,
        duration: glowProps.duration,
        ref: ref,
      });
    });
    return () => {
      refs.forEach((ref) => {
        if (!ref.current) return;
        gsap.killTweensOf(ref.current);
      });
    };
  }, [allTexturesLoaded, glowProps]);

  useEffect(() => {
    if (!allTexturesLoaded) return;
    const refs = [crystalBallAlternateRef, crystalBallRef, reflectionRef];
    refs.forEach((ref) => {
      if (!ref.current) return;
      setPosition({
        ref: ref,
        usePixi: true,
        x: parentSize.width / 2,
        y: parentSize.height - parentSize.height / 6,
      });
    });
  }, [allTexturesLoaded, crystalBallRef, crystalBallAlternateRef, parentSize]);

  useEffect(() => {
    if (!allTexturesLoaded) return;
    const refs = [crystalBallAlternateRef, crystalBallRef, reflectionRef];
    refs.forEach((ref) => {
      if (!ref.current) return;
      ref.current.width = 0.2 * parentSize.width;
      ref.current.height = 0.2 * parentSize.width;
    });
  }, [allTexturesLoaded, crystalBallRef, parentSize]);

  useEffect(() => {
    if (!allTexturesLoaded) return;
    if (crystalBallContainerRef.current) {
      return animateFloat({
        ref: crystalBallContainerRef,
        amplitudeX: parentSize.width * 0.01,
        amplitudeY: parentSize.width * 0.01,
        rotationRange: 0.5,
        tickTime: 0.01,
      });
    }
  }, [allTexturesLoaded, parentSize.width]);

  if (!allTexturesLoaded || !textures.crystalBall) return null;

  return (
    <pixiContainer
      ref={crystalBallContainerRef}
      width={576}
      height={576}
      anchor={0.5}
      x={parentSize.width / 2}
      y={parentSize.height - parentSize.height / 6}
    >
      <pixiSprite
        anchor={0.5}
        alpha={0.8}
        ref={crystalBallRef}
        texture={textures.crystalBall}
        tint={0xffffff}
      />
      <pixiSprite
        anchor={0.5}
        alpha={0.5}
        ref={crystalBallAlternateRef}
        texture={textures.crystalBall}
        tint={0xffffff}
      />
      <pixiSprite
        anchor={0.5}
        blendMode="multiply"
        texture={textures.crystalBallReflection}
        tint={0xffffff}
        ref={reflectionRef}
      />
    </pixiContainer>
  );
}
