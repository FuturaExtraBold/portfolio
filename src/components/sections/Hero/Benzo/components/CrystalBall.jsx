import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useBenzo } from "../BenzoProvider";

export default function CrystalBall() {
  const refCrystalBall = useRef(null);

  const {
    allTexturesLoaded,
    animateRotation,
    animateTint,
    colorCrystalBall,
    durationCrystalBall,
    parentSize,
    setPosition,
    textures,
  } = useBenzo();

  const scaleCrystalBall = useCallback(() => {
    const calculateScale = () => {
      const maxWidth = 1440; // Maximum width where scale is 1
      const minWidth = 768; // Minimum width where scale decreases
      const width = Math.max(minWidth, Math.min(parentSize.width, maxWidth)); // Clamp width between min and max
      return width / maxWidth / 2; // Scale is proportional to the width
    };

    const scale = calculateScale();

    if (refCrystalBall.current) {
      gsap.set(refCrystalBall.current, {
        pixi: { scale: scale },
      });
    }
  }, [parentSize]);

  // DONE
  useEffect(() => {
    if (refCrystalBall.current) {
      animateTint({
        color: colorCrystalBall,
        duration: durationCrystalBall,
        ref: refCrystalBall,
      });
    }
  }, [animateTint, colorCrystalBall, durationCrystalBall]);

  // DONE
  useEffect(() => {
    if (refCrystalBall.current) {
      animateRotation({ ref: refCrystalBall });
    }
  }, [animateRotation]);

  // DONE
  useEffect(() => {
    if (refCrystalBall.current) {
      setPosition({
        ref: refCrystalBall,
        usePixi: true,
        x: parentSize.width / 2,
        y: parentSize.height - parentSize.height / 6,
      });
    }
  }, [setPosition, parentSize]);

  useEffect(() => {
    if (refCrystalBall.current) {
      scaleCrystalBall();
    }
  }, [parentSize, scaleCrystalBall]);

  if (!allTexturesLoaded || !textures.crystalBall) return null;

  return (
    <pixiSprite
      alpha={0.96}
      anchor={0.5}
      height={250}
      ref={refCrystalBall}
      texture={textures.crystalBall}
      tint="#ffffff"
      width={250}
    />
  );
}
