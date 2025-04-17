import { type JSX, useEffect, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function BenzoTitle(): JSX.Element | null {
  const {
    allTexturesLoaded,
    parentSize,
    scaleRef,
    setPosition,
    setScale,
    textures,
  } = useBenzo();

  const refTitle = useRef<Sprite | null>(null);

  useEffect(() => {
    if (refTitle.current) {
      setPosition({
        ref: refTitle,
        usePixi: true,
        x: parentSize.width / 2,
        y: 0.175 * parentSize.height,
      });
    }
  }, [parentSize, setPosition]);

  useEffect(() => {
    if (refTitle.current) {
      setScale({
        ref: refTitle,
        parentSize: parentSize,
        minScale: 0.22,
        maxScale: 0.5,
        scaleRef,
      });
    }
  }, [parentSize, scaleRef, setScale]);

  if (!allTexturesLoaded || !textures.benzoTitle) return null;

  return (
    <pixiSprite
      alpha={1}
      anchor={0.5}
      ref={refTitle}
      scale={0.5}
      texture={textures.benzoTitle}
      x={parentSize.width / 2}
      y={180}
    />
  );
}
