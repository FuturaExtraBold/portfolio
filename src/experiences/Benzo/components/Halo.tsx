import { gsap } from "gsap";
import { Sprite } from "pixi.js";
import { type JSX, useEffect, useRef } from "react";

import { useBenzo } from "../BenzoProvider";

export default function Halo(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, smokeProps, textures } = useBenzo();

  const haloRef = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!haloRef.current || !allTexturesLoaded) return;
    gsap.to(haloRef.current, {
      pixi: { tint: smokeProps.color },
      duration: smokeProps.duration,
    });
    const el = haloRef.current;
    return () => {
      if (el) gsap.killTweensOf(el);
    };
  }, [allTexturesLoaded, smokeProps]);

  if (!allTexturesLoaded || !textures.halo) return null;

  return (
    <pixiSprite
      alpha={0.5}
      ref={haloRef}
      texture={textures.halo}
      width={parentSize.width}
      height={parentSize.height}
    />
  );
}
