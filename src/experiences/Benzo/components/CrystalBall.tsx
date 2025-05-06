import { type JSX, useEffect, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import {
  animateRotation,
  animateTint,
  setPosition,
  setScale,
} from "utils/animation";

export default function CrystalBall(): JSX.Element | null {
  const { allTexturesLoaded, glowProps, parentSize, scaleRef, textures } =
    useBenzo();
  const crystalBallRef = useRef<Sprite | null>(null);

  const getRotationParams = () => {
    const duration = Math.random() * 4 + 4;
    const origin = (45 + Math.random() * 10) / 100;
    return { duration, origin };
  };

  useEffect(() => {
    if (!crystalBallRef) return;
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
    if (!crystalBallRef) return;
    // console.log("Benzo - Crystal Ball - animateTint");
    animateTint({
      color: glowProps.color,
      duration: glowProps.duration,
      ref: crystalBallRef,
    });
  }, [crystalBallRef, glowProps]);

  useEffect(() => {
    if (!crystalBallRef) return;
    console.log("Benzo - Crystal Ball - setPosition");
    setPosition({
      ref: crystalBallRef,
      usePixi: true,
      x: parentSize.width / 2,
      y: parentSize.height - parentSize.height / 6,
    });
  }, [crystalBallRef, parentSize]);

  useEffect(() => {
    if (!crystalBallRef) return;
    console.log("Benzo - Crystal Ball - setScale");
    setScale({
      ref: crystalBallRef,
      parentSize: parentSize,
      minScale: 0.22,
      maxScale: 0.5,
      scaleRef,
    });
  }, [crystalBallRef, parentSize, scaleRef]);

  if (!allTexturesLoaded || !textures.crystalBall) return null;

  return (
    <pixiSprite
      alpha={0.96}
      anchor={0.5}
      height={250}
      ref={crystalBallRef}
      texture={textures.crystalBall}
      tint={0xffffff}
      width={250}
    />
  );
}
