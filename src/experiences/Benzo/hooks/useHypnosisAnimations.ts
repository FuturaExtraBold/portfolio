import { type RefObject, useEffect } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

import { animateRotation, animateScale, setScale } from "utils/animation";

interface UseHypnosisAnimationsProps {
  hypnosisRef: RefObject<Sprite | null>;
}

export default function useHypnosisAnimations({
  hypnosisRef,
}: UseHypnosisAnimationsProps): void {
  const { parentSize, scaleRef } = useBenzo();

  const getRotationParams = () => {
    const duration = Math.random() * 4 + 16;
    const origin = Math.random() * 0.02 + 0.48;
    return { duration, origin };
  };

  useEffect(() => {
    console.log("Benzo - Hypnosis - animateRotation");
    animateRotation({
      ...getRotationParams(),
      ref: hypnosisRef,
      ease: "none",
      getNextParams: getRotationParams,
      repeat: true,
    });
  }, [hypnosisRef]);

  useEffect(() => {
    console.log("Benzo - Hypnosis - setScale");
    setScale({
      ref: hypnosisRef,
      parentSize: parentSize,
      minScale: 0.5,
      maxScale: 1,
      minWidth: 768,
      maxWidth: 1440,
      scaleRef,
    });
  }, [hypnosisRef, parentSize, scaleRef]);

  useEffect(() => {
    console.log("Benzo - Hypnosis - animateScale");
    const baseScale = scaleRef.current ?? 1;
    animateScale({
      duration: 4,
      ref: hypnosisRef,
      scaleAmount: baseScale * 0.5,
      ease: "sine.inOut",
    });
  }, [hypnosisRef, scaleRef]);
}
