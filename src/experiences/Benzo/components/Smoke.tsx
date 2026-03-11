import { gsap } from "gsap";
import { Sprite, Texture } from "pixi.js";
import React, { createRef, type JSX, useEffect, useRef, useState } from "react";

import { useBenzo } from "../BenzoProvider";

export default function Smoke(): JSX.Element | null {
  const {
    allTexturesLoaded,
    glowColorsSmoke,
    parentSize,
    parentSizeRef,
    textures,
  } = useBenzo();

  const [particlesSmoke, setParticlesSmoke] = useState<JSX.Element[]>([]);

  const refParticlesSmoke = useRef<Sprite | null>(null);
  const particlesCreatedRef = useRef(false);
  const particleRefsRef = useRef<React.RefObject<Sprite | null>[]>([]);
  const timeoutIdsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (!allTexturesLoaded) return;
    if (particlesCreatedRef.current) return;
    const size = parentSizeRef.current;
    if (
      textures.smokeParticle !== Texture.EMPTY &&
      size.height > 0 &&
      size.width > 0
    ) {
      particlesCreatedRef.current = true;
      const numParticles = 100;
      const particles: JSX.Element[] = [];
      for (let i = 0; i < numParticles; i++) {
        const refParticle = createRef<Sprite>();
        particleRefsRef.current.push(refParticle);
        const randColor =
          glowColorsSmoke[Math.floor(Math.random() * glowColorsSmoke.length)];

        const initialX = -200 + Math.random() * 1640;

        particles.push(
          <pixiSprite
            alpha={0.8}
            anchor={0.5}
            eventMode="static"
            key={`particle-${i}`}
            rotation={Math.random() * 40 - 20}
            ref={refParticle}
            scale={Math.random() * 0.2 + 0.8}
            texture={textures.smokeParticle}
            tint={randColor}
            x={initialX}
            y={Math.random() * size.height + 1400}
          />,
        );

        const timeoutId = setTimeout(() => {
          if (refParticle.current) {
            gsap.to(refParticle.current, {
              x: 720,
              y: -100,
              alpha: 0,
              delay: Math.random() * 2,
              duration: Math.random() * 6 + 4,
              ease: "power1.out",
              repeat: -1,
              onRepeat: () => {
                if (refParticle.current) {
                  refParticle.current.y = parentSizeRef.current.height + 1000;
                  refParticle.current.alpha = 0.2;
                }
              },
            });
          }
        }, 300);
        timeoutIdsRef.current.push(timeoutId);
      }

      setParticlesSmoke(particles);
    }
  }, [
    allTexturesLoaded,
    glowColorsSmoke,
    parentSizeRef,
    textures.smokeParticle,
  ]);

  useEffect(() => {
    const timeoutIds = timeoutIdsRef.current;
    const particleRefs = particleRefsRef.current;
    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
      particleRefs.forEach((ref) => {
        if (ref.current) gsap.killTweensOf(ref.current);
      });
    };
  }, []);

  if (!allTexturesLoaded || !textures.smokeParticle) return null;

  return (
    <pixiContainer
      ref={refParticlesSmoke}
      scale={(parentSize.width * 0.75) / 1000}
    >
      {particlesSmoke}
    </pixiContainer>
  );
}
