import { useEffect, type JSX } from "react";
import { gsap } from "gsap";
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
  const beamDuration = 6;

  useEffect(() => {
    if (!allTexturesLoaded || !beamLeftRef.current || !beamRightRef.current)
      return;
    console.log("Lighthouse - Beam - animateBeams");
    const beamAlphaMin = 0.1;
    const beamAlphaMax = 0.8;
    const beamScale = 3;
    let beamTimeline: gsap.core.Timeline | null = null;

    requestAnimationFrame(() => {
      if (beamTimeline) return;
      const rbl = beamLeftRef.current;
      const rbr = beamRightRef.current;

      if (!rbl || !rbr) return;

      beamTimeline = gsap.timeline({ repeat: -1 });

      beamTimeline.set(rbl, {
        pixi: { scaleY: beamScale, alpha: beamAlphaMax },
      });
      beamTimeline.set(rbr, { pixi: { scaleY: 0, alpha: 0 } });
      beamTimeline.to(rbl, {
        pixi: { scaleY: 0, alpha: beamAlphaMin },
        ease: "circ.out",
        duration: beamDuration,
      });
      beamTimeline.set(rbl, { pixi: { alpha: 0, scaleY: 0 } });
      beamTimeline.set(rbr, { pixi: { alpha: 0, scaleY: 0 } });
      beamTimeline.to(rbr, {
        pixi: { scaleY: beamScale, alpha: beamAlphaMax },
        ease: "circ.in",
        delay: beamDuration,
        duration: beamDuration,
      });
    });
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
