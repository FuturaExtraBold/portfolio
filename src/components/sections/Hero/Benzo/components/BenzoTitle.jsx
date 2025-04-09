import { useEffect, useRef } from "react";
import { useBenzo } from "../BenzoProvider";

export default function BenzoTitle() {
  const {
    allTexturesLoaded,
    parentSize,
    scaleRef,
    setPosition,
    setScale,
    textures,
  } = useBenzo();

  const refTitle = useRef(null);

  useEffect(() => {
    if (refTitle.current) {
      console.log("Setting position for handRight");
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
      scale={0.5}
      anchor={0.5}
      eventMode={"static"}
      ref={refTitle}
      texture={textures.benzoTitle}
      x={parentSize.width / 2}
      y={180}
    />
  );
}
