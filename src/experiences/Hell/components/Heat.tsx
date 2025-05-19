import { useEffect, type JSX } from "react";
import { gsap } from "gsap";
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

  useEffect(() => {
    if (!allTexturesLoaded || !displacementMapRef.current) return;
    console.log("Hell - Heat - animateDisplacementMap");

    requestAnimationFrame(() => {
      const dmr = displacementMapRef.current;

      if (!dmr) return;

      gsap.to(dmr, {
        ease: "none",
        duration: 6,
        repeat: -1,
        x: -521,
      });
      gsap.to(dmr, {
        ease: "none",
        duration: 3,
        repeat: -1,
        y: -512,
      });
    });
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
