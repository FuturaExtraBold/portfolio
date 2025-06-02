import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container, Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import {
  animateFloat,
  animateRotation,
  animateTint,
  setPosition,
} from "utils/animation";

export default function CrystalBall(): JSX.Element | null {
  const { allTexturesLoaded, glowProps, parentSize, textures } = useBenzo();
  const crystalBallContainerRef = useRef<Container | null>(null);
  const crystalBallRef = useRef<Sprite | null>(null);
  const crystalBallAlternateRef = useRef<Sprite | null>(null);
  const crystalBallSkullRef = useRef<Sprite | null>(null);
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
  }, [allTexturesLoaded, crystalBallRef, crystalBallAlternateRef]);

  useEffect(() => {
    if (!allTexturesLoaded) return;
    const refs = [crystalBallAlternateRef, crystalBallRef, crystalBallSkullRef];
    refs.forEach((ref) => {
      if (!ref.current) return;
      animateTint({
        color: glowProps.color,
        duration: glowProps.duration,
        ref: ref,
      });
    });
  }, [allTexturesLoaded, crystalBallRef, glowProps]);

  useEffect(() => {
    if (!allTexturesLoaded) return;
    if (crystalBallSkullRef.current) {
      const thingy = gsap.timeline({
        repeat: -1,
      });
      thingy.to(crystalBallSkullRef.current, {
        delay: 8,
        alpha: 1,
        duration: 2,
      });
      thingy.to(crystalBallSkullRef.current, {
        alpha: 0,
        duration: 1,
      });
    }
  }, [allTexturesLoaded, crystalBallSkullRef]);

  useEffect(() => {
    if (!allTexturesLoaded) return;
    const refs = [
      crystalBallAlternateRef,
      crystalBallRef,
      crystalBallSkullRef,
      reflectionRef,
    ];
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
    const refs = [
      crystalBallAlternateRef,
      crystalBallRef,
      crystalBallSkullRef,
      reflectionRef,
    ];
    refs.forEach((ref) => {
      if (!ref.current) return;
      ref.current.width = 0.2 * parentSize.width;
      ref.current.height = 0.2 * parentSize.width;
    });
  }, [allTexturesLoaded, crystalBallRef, parentSize]);

  useEffect(() => {
    if (!allTexturesLoaded) return;
    if (crystalBallContainerRef.current) {
      animateFloat({
        ref: crystalBallContainerRef,
        amplitudeX: parentSize.width * 0.01,
        amplitudeY: parentSize.width * 0.01,
        rotationRange: 0.5,
        tickTime: 0.01,
      });
    }
  }, [allTexturesLoaded, crystalBallContainerRef, parentSize]);

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
        alpha={0}
        ref={crystalBallSkullRef}
        texture={textures.crystalBallSkull}
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
