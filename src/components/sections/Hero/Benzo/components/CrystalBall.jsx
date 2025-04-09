import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useBenzo } from "../BenzoProvider";

export default function CrystalBall() {
  const refCrystalBall = useRef(null);

  const {
    allTexturesLoaded,
    colorCrystalBall,
    durationCrystalBall,
    parentSize,
    textures,
  } = useBenzo();

  const spinCrystalBall = useCallback(() => {
    const duration = Math.random() * 4 + 4;
    const origin = (45 + Math.random() * 10) / 100;

    gsap.set(refCrystalBall.current, {
      pixi: { rotation: 0 },
    });

    gsap.to(refCrystalBall.current, {
      pixi: { anchor: origin, rotation: 360 },
      duration: duration,
      ease: "none",
      onComplete: () => {
        spinCrystalBall();
      },
    });
  }, []);

  const positionCrystalBall = useCallback(() => {
    if (refCrystalBall.current) {
      gsap.set(refCrystalBall.current, {
        pixi: {
          x: parentSize.width / 2,
          y: parentSize.height - parentSize.height / 6,
        },
      });
    }
  }, [parentSize]);

  const tintCrystalBall = useCallback(() => {
    if (refCrystalBall.current) {
      gsap.to(refCrystalBall.current, {
        pixi: { tint: colorCrystalBall, duration: durationCrystalBall },
      });
    }
  }, [colorCrystalBall, durationCrystalBall]);

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

  useEffect(() => {
    if (refCrystalBall.current) {
      tintCrystalBall();
    }
  }, [tintCrystalBall]);

  useEffect(() => {
    if (refCrystalBall.current) {
      spinCrystalBall();
    }
  }, [spinCrystalBall]);

  useEffect(() => {
    if (refCrystalBall.current) {
      positionCrystalBall();
    }
  }, [parentSize, positionCrystalBall]);

  useEffect(() => {
    if (refCrystalBall.current) {
      scaleCrystalBall();
    }
  }, [parentSize, scaleCrystalBall]);

  if (!allTexturesLoaded || !textures.crystalBall) return null;

  return (
    <pixiSprite
      alpha={1}
      anchor={0.5}
      height={250}
      ref={refCrystalBall}
      texture={textures.crystalBall}
      tint="#ffffff"
      width={250}
    />
  );
}
