import { gsap } from "gsap";
import { type JSX, useEffect, useRef } from "react";

import { useLighthouse } from "../LighthouseProvider";

export default function Overlay(): JSX.Element | null {
  const { allTexturesLoaded, overlayRef, parentSize, textures } =
    useLighthouse();

  const flashTimelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!allTexturesLoaded || !overlayRef.current) return;
    if (import.meta.env.DEV) {
      console.log("Lighthouse - Flash - animateFlash");
    }
    const flashDuration = 0.4;
    const beamDuration = 3;

    const rafId = requestAnimationFrame(() => {
      if (flashTimelineRef.current) return;
      const or = overlayRef.current;

      if (!or) return;

      flashTimelineRef.current = gsap.timeline({ repeat: -1 });

      flashTimelineRef.current.to(or, {
        pixi: {
          alpha: 0,
        },
        duration: flashDuration,
      });
      flashTimelineRef.current.to(or, {
        pixi: {
          alpha: 0.7,
        },
        delay: beamDuration * 3 - flashDuration * 2,
        duration: flashDuration,
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (flashTimelineRef.current) {
        flashTimelineRef.current.kill();
        flashTimelineRef.current = null;
      }
    };
  }, [allTexturesLoaded, overlayRef]);

  if (!allTexturesLoaded || !textures.overlay) return null;

  return (
    <pixiSprite
      alpha={0}
      ref={overlayRef}
      texture={textures.overlay}
      width={parentSize.width}
      height={parentSize.height}
    />
  );
}
