import { type JSX, useCallback, useEffect } from "react";
import { gsap } from "gsap";
import { useLighthouse } from "../LighthouseProvider";

const WindowGlow = (): JSX.Element | null => {
  const { allTexturesLoaded, parentSize, textures, windowGlowRef } =
    useLighthouse();

  const flicker = useCallback(() => {
    if (!allTexturesLoaded || !windowGlowRef.current) return;
    gsap.to(windowGlowRef.current, {
      alpha: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 0.1 + 0.2,
      repeat: 0,
      yoyo: true,
      ease: "power1.inOut",
      onComplete: () => flicker(),
    });
  }, [allTexturesLoaded, windowGlowRef]);

  useEffect(() => {
    if (windowGlowRef.current && allTexturesLoaded) {
      flicker();
    }
  }, [allTexturesLoaded, flicker, windowGlowRef]);

  if (!allTexturesLoaded || !textures.windowGlow) return null;

  return (
    <pixiSprite
      ref={windowGlowRef}
      alpha={1}
      height={parentSize.height}
      texture={textures.windowGlow}
      width={parentSize.width}
    />
  );
};

export default WindowGlow;
