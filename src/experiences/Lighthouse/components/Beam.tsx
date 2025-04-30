import { type JSX, useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { useLighthouse } from "../LighthouseProvider";

export default function Beam(): JSX.Element | null {
  const { allTexturesLoaded, parentSizeRef, textures } = useLighthouse();

  const refBeamLeft = useRef<Sprite | null>(null);
  const refBeamRight = useRef<Sprite | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const beamAlphaMin = 0.1;
  const beamAlphaMax = 0.8;
  const beamDuration = 6;
  const beamScale = 3;
  const beamAnchorY = 0.25;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const beamAnchor = { x: 0, y: beamAnchorY };

  useEffect(() => {
    if (timelineRef.current) return;

    console.log("shouldnt see this but once");

    requestAnimationFrame(() => {
      const rbl = refBeamLeft.current;
      const rbr = refBeamRight.current;

      if (!rbl || !rbr) return;

      const tl = gsap.timeline({ repeat: -1 });
      timelineRef.current = tl;

      console.log("boomtown", rbl, rbr);

      tl.set(rbl, { pixi: { scaleY: beamScale, alpha: beamAlphaMax } });
      tl.set(rbr, { pixi: { scaleY: 0, alpha: 0 } });
      tl.to(rbl, {
        pixi: { scaleY: 0, alpha: beamAlphaMin },
        ease: "circ.out",
        duration: beamDuration,
      });
      tl.set(rbl, { pixi: { alpha: 0 } });
      tl.set(rbr, { pixi: { alpha: 0.1 } });
      tl.to(rbr, {
        pixi: { scaleY: beamScale, alpha: beamAlphaMax },
        ease: "circ.in",
        duration: beamDuration,
      });
    });
  }, [allTexturesLoaded, textures]);

  const sprites = useMemo(() => {
    return (
      <>
        <pixiSprite
          alpha={beamAlphaMax}
          anchor={beamAnchor}
          height={parentSizeRef.current.height}
          ref={refBeamLeft}
          scale={0.5}
          texture={textures.beamLeft}
          width={parentSizeRef.current.width}
          x={0}
          y={parentSizeRef.current.height * beamAnchorY}
        />
        <pixiSprite
          alpha={beamAlphaMax}
          anchor={beamAnchor}
          height={parentSizeRef.current.height}
          ref={refBeamRight}
          scale={0.5}
          texture={textures.beamRight}
          width={parentSizeRef.current.width}
          x={0}
          y={parentSizeRef.current.height * beamAnchorY}
        />
      </>
    );
  }, [beamAnchor, parentSizeRef, textures.beamLeft, textures.beamRight]);

  if (!allTexturesLoaded || !textures.beamLeft || !textures.beamRight)
    return null;

  return sprites;
}
