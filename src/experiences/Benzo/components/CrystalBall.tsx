import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container, Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { animateRotation, animateTint, setPosition } from "utils/animation";

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
    if (crystalBallRef.current) {
      animateTint({
        color: glowProps.color,
        duration: glowProps.duration,
        ref: crystalBallRef,
      });
    }
    if (crystalBallAlternateRef.current) {
      animateTint({
        color: glowProps.color,
        duration: glowProps.duration,
        ref: crystalBallAlternateRef,
      });
    }
    if (crystalBallSkullRef.current) {
      animateTint({
        color: glowProps.color,
        duration: glowProps.duration,
        ref: crystalBallSkullRef,
      });
    }
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
    if (crystalBallRef.current) {
      setPosition({
        ref: crystalBallRef,
        usePixi: true,
        x: parentSize.width / 2,
        y: parentSize.height - parentSize.height / 6,
      });
    }
    if (crystalBallAlternateRef.current) {
      setPosition({
        ref: crystalBallAlternateRef,
        usePixi: true,
        x: parentSize.width / 2,
        y: parentSize.height - parentSize.height / 6,
      });
    }
    if (reflectionRef.current) {
      setPosition({
        ref: crystalBallSkullRef,
        usePixi: true,
        x: parentSize.width / 2,
        y: parentSize.height - parentSize.height / 6,
      });
    }
    if (reflectionRef.current) {
      setPosition({
        ref: reflectionRef,
        usePixi: true,
        x: parentSize.width / 2,
        y: parentSize.height - parentSize.height / 6,
      });
    }
  }, [allTexturesLoaded, crystalBallRef, crystalBallAlternateRef, parentSize]);

  useEffect(() => {
    if (!allTexturesLoaded) return;
    if (crystalBallRef.current) {
      crystalBallRef.current.width = 0.2 * parentSize.width;
      crystalBallRef.current.height = 0.2 * parentSize.width;
    }
    if (crystalBallAlternateRef.current) {
      crystalBallAlternateRef.current.width = 0.2 * parentSize.width;
      crystalBallAlternateRef.current.height = 0.2 * parentSize.width;
    }
    if (reflectionRef.current) {
      reflectionRef.current.width = 0.2 * parentSize.width;
      reflectionRef.current.height = 0.2 * parentSize.width;
    }
    if (crystalBallSkullRef.current) {
      crystalBallSkullRef.current.width = 0.2 * parentSize.width;
      crystalBallSkullRef.current.height = 0.2 * parentSize.width;
    }
  }, [allTexturesLoaded, crystalBallRef, parentSize]);

  useEffect(() => {
    if (!allTexturesLoaded) return;
    if (crystalBallContainerRef.current) {
      const amplitudeX = parentSize.width * 0.01;
      const amplitudeY = parentSize.width * 0.01;
      const rotationRange = 0.5;
      const tickTime = 0.01;
      gsap.killTweensOf(crystalBallContainerRef.current);

      let time = 0;

      const tick = () => {
        time += tickTime;

        const offsetX = Math.sin(time * 0.8) * amplitudeX;
        const offsetY = Math.cos(time * 0.6) * amplitudeY;
        const rotation =
          Math.sin(time * 0.3) * ((rotationRange * Math.PI) / 180);

        gsap.set(crystalBallContainerRef.current, {
          x: offsetX,
          y: offsetY,
          rotation,
        });
      };

      gsap.ticker.add(tick);

      return () => {
        gsap.ticker.remove(tick);
        gsap.killTweensOf(crystalBallContainerRef.current);
      };
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
