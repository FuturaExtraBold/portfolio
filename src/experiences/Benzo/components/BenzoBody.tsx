import { type JSX, useEffect, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { setPosition, setScale } from "utils/animation";

export default function BenzoBody(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, scaleRef, textures } = useBenzo();

  const benzoRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!benzoRef) return;
    console.log("Benzo - Glow Glasses - setScale");
    setScale({
      ref: benzoRef,
      parentSize: parentSize,
      minScale: 0.25,
      maxScale: 0.5,
      scaleRef,
    });
  }, [benzoRef, parentSize, scaleRef]);

  useEffect(() => {
    if (!benzoRef.current) return;
    console.log("Benzo - Glow Glasses - setPosition");
    setPosition({
      ref: benzoRef,
      usePixi: true,
      x: parentSize.width / 2 - benzoRef.current.width / 2,
      y: parentSize.height - benzoRef.current.height,
    });
  }, [benzoRef, parentSize, scaleRef]);

  if (!allTexturesLoaded || !textures.benzoBody) return null;

  return <pixiSprite alpha={1} ref={benzoRef} texture={textures.benzoBody} />;
}
