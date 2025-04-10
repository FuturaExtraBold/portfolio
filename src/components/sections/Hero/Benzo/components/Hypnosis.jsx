import { useEffect, useRef } from "react";
import { useBenzo } from "../BenzoProvider";

export default function Hypnosis() {
  const { allTexturesLoaded, parentSize, animateRotation, textures } =
    useBenzo();

  const refHypnosis = useRef(null);

  useEffect(() => {
    if (refHypnosis.current) {
      animateRotation({
        duration: 20,
        ref: refHypnosis,
        ease: "none",
        repeat: true,
      });
    }
  }, [animateRotation, textures]);

  if (!allTexturesLoaded || !textures.hypnosis) return null;

  return (
    <pixiSprite
      anchor={0.5}
      height={1800}
      ref={refHypnosis}
      texture={textures.hypnosis}
      width={1800}
      x={parentSize.width / 2}
      y={parentSize.height / 2}
    />
  );
}
