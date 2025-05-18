import { type JSX, useCallback, useEffect } from "react";
import { gsap } from "gsap";
import { useLighthouse } from "../LighthouseProvider";

const Windows = (): JSX.Element | null => {
  const { allTexturesLoaded, parentSize, textures, windowsRef } =
    useLighthouse();

  const flicker = useCallback(() => {
    if (!allTexturesLoaded || !windowsRef.current) return;
    gsap.to(windowsRef.current, {
      alpha: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 0.1 + 0.2,
      repeat: 0,
      yoyo: true,
      ease: "power1.inOut",
      onComplete: () => flicker(),
    });
  }, [allTexturesLoaded, windowsRef]);

  useEffect(() => {
    if (windowsRef.current && allTexturesLoaded) {
      flicker();
    }
  }, [allTexturesLoaded, flicker, windowsRef]);

  if (!allTexturesLoaded || !textures.windows) return null;

  return (
    <pixiSprite
      ref={windowsRef}
      alpha={1}
      height={parentSize.height}
      texture={textures.windows}
      width={parentSize.width}
    />
  );
};

export default Windows;
