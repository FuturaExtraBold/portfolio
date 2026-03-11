import { gsap } from "gsap";
import { type JSX, useEffect, useRef } from "react";

import { useHell } from "../HellProvider";
import Background from "./Background";

export default function Heat(): JSX.Element | null {
  const {
    allTexturesLoaded,
    displacementFilter,
    displacementMapRef,
    parentSize,
    textures,
  } = useHell();

  const tweensRef = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    if (!allTexturesLoaded || !displacementMapRef.current) return;
    if (import.meta.env.DEV) {
      console.log("Hell - Heat - animateDisplacementMap");
    }

    const rafId = requestAnimationFrame(() => {
      const dmr = displacementMapRef.current;

      if (!dmr) return;

      tweensRef.current = [
        gsap.to(dmr, { ease: "none", duration: 6, repeat: -1, x: -521 }),
        gsap.to(dmr, { ease: "none", duration: 3, repeat: -1, y: -512 }),
      ];
    });

    return () => {
      cancelAnimationFrame(rafId);
      tweensRef.current.forEach((t) => t.kill());
      tweensRef.current = [];
    };
  }, [allTexturesLoaded, displacementMapRef]);

  if (!allTexturesLoaded || !textures.displacementMap) return null;

  return (
    <>
      <pixiContainer
        alpha={1}
        filters={displacementFilter ? [displacementFilter] : []}
        height={parentSize.height}
        width={parentSize.width}
      >
        <Background />
      </pixiContainer>
      <pixiTilingSprite
        alpha={0}
        ref={displacementMapRef}
        texture={textures.displacementMap}
        width={512}
        height={512}
      />
    </>
  );
}
