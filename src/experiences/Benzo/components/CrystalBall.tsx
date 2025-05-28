import { type JSX, useEffect, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { animateRotation, animateTint, setPosition } from "utils/animation";

export default function CrystalBall(): JSX.Element | null {
  const { allTexturesLoaded, glowProps, parentSize, textures } = useBenzo();
  const crystalBallRef = useRef<Sprite | null>(null);

  const getRotationParams = () => {
    const duration = Math.random() * 4 + 4;
    const origin = (45 + Math.random() * 10) / 100;
    return { duration, origin };
  };

  useEffect(() => {
    if (!crystalBallRef.current || !allTexturesLoaded) return;
    animateRotation({
      ...getRotationParams(),
      ref: crystalBallRef,
      rotationAmount: 360,
      repeat: true,
      getNextParams: getRotationParams,
    });
  }, [allTexturesLoaded, crystalBallRef]);

  useEffect(() => {
    if (!crystalBallRef.current || !allTexturesLoaded) return;
    animateTint({
      color: glowProps.color,
      duration: glowProps.duration,
      ref: crystalBallRef,
    });
  }, [allTexturesLoaded, crystalBallRef, glowProps]);

  useEffect(() => {
    if (!crystalBallRef.current || !allTexturesLoaded) return;
    setPosition({
      ref: crystalBallRef,
      usePixi: true,
      x: parentSize.width / 2,
      y: parentSize.height - parentSize.height / 6,
    });
  }, [allTexturesLoaded, crystalBallRef, parentSize]);

  useEffect(() => {
    if (!crystalBallRef.current || !allTexturesLoaded) return;
    console.log("boom, parentSize", parentSize);
    crystalBallRef.current.width = 0.3 * parentSize.width;
    crystalBallRef.current.height = 0.3 * parentSize.width;
  }, [allTexturesLoaded, crystalBallRef, parentSize]);

  if (!allTexturesLoaded || !textures.crystalBall) return null;

  return (
    <pixiSprite
      anchor={0.5}
      height={0.3 * parentSize.width}
      ref={crystalBallRef}
      texture={textures.crystalBall}
      tint={0xffffff}
      width={0.3 * parentSize.width}
    />
  );
}
