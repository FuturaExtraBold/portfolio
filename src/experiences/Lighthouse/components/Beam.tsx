import { gsap } from "gsap";
import { type JSX, useEffect, useRef } from "react";

import { useLighthouse } from "../LighthouseProvider";

export default function Beam(): JSX.Element | null {
  const {
    allTexturesLoaded,
    beamLeftRef,
    beamRightRef,
    parentSizeRef,
    textures,
  } = useLighthouse();

  const beamAlphaMax = 0.8;
  const beamAnchorY = 0.25;
  const beamAnchor = { x: 0, y: beamAnchorY };
  const psw = parentSizeRef.current.width;
  const psh = parentSizeRef.current.height;
  const beamDuration = 3;

  const beamTimelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!allTexturesLoaded || !beamLeftRef.current || !beamRightRef.current)
      return;
    if (import.meta.env.DEV) {
      console.log("Lighthouse - Beam - animateBeams");
    }
    const beamAlphaMin = 0.1;
    const beamAlphaMax = 0.8;
    const beamScale = 3;

    const rafId = requestAnimationFrame(() => {
      if (beamTimelineRef.current) return;
      const rbl = beamLeftRef.current;
      const rbr = beamRightRef.current;

      if (!rbl || !rbr) return;

      beamTimelineRef.current = gsap.timeline({ repeat: -1 });

      beamTimelineRef.current.set(rbl, {
        pixi: { scaleY: beamScale, alpha: beamAlphaMax },
      });
      beamTimelineRef.current.set(rbr, { pixi: { scaleY: 0, alpha: 0 } });
      beamTimelineRef.current.to(rbl, {
        pixi: { scaleY: 0, alpha: beamAlphaMin },
        ease: "circ.out",
        duration: beamDuration,
      });
      beamTimelineRef.current.set(rbl, { pixi: { alpha: 0, scaleY: 0 } });
      beamTimelineRef.current.set(rbr, { pixi: { alpha: 0, scaleY: 0 } });
      beamTimelineRef.current.to(rbr, {
        pixi: { scaleY: beamScale, alpha: beamAlphaMax },
        ease: "circ.in",
        delay: beamDuration,
        duration: beamDuration,
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (beamTimelineRef.current) {
        beamTimelineRef.current.kill();
        beamTimelineRef.current = null;
      }
    };
  }, [allTexturesLoaded, beamLeftRef, beamRightRef]);

  if (!allTexturesLoaded || !textures.beam) return null;

  return (
    <>
      <pixiSprite
        alpha={beamAlphaMax}
        anchor={beamAnchor}
        height={psh}
        ref={beamLeftRef}
        scale={0.5}
        texture={textures.beam}
        width={psw}
        x={0}
        y={psh * beamAnchorY}
      />
      <pixiSprite
        alpha={beamAlphaMax}
        anchor={beamAnchor}
        height={psh}
        ref={beamRightRef}
        scale={-0.5}
        texture={textures.beam}
        width={psw}
        x={psw}
        y={psh * beamAnchorY}
      />
    </>
  );
}
