import { type JSX, useEffect } from "react";
import { gsap } from "gsap";
import { useLighthouse } from "../LighthouseProvider";

export default function Overlay(): JSX.Element | null {
  const { allTexturesLoaded, overlayRef, parentSize, textures } =
    useLighthouse();

  useEffect(() => {
    if (!allTexturesLoaded || !overlayRef.current) return;
    console.log("Lighthouse - Flash - animateFlash");
    const flashDuration = 0.4;
    const beamDuration = 3;
    let flashTimeline: gsap.core.Timeline | null = null;

    requestAnimationFrame(() => {
      if (flashTimeline) return;
      const or = overlayRef.current;

      if (!or) return;

      flashTimeline = gsap.timeline({ repeat: -1 });

      flashTimeline.to(or, {
        pixi: {
          alpha: 0,
        },
        duration: flashDuration,
      });
      flashTimeline.to(or, {
        pixi: {
          alpha: 0.7,
        },
        delay: beamDuration * 3 - flashDuration * 2,
        duration: flashDuration,
      });
    });
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
