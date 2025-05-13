import { createRef, type JSX, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Sprite, Texture } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function Smoke(): JSX.Element | null {
  const { allTexturesLoaded, glowColorsSmoke, parentSize, textures } =
    useBenzo();

  const [particlesSmoke, setParticlesSmoke] = useState<JSX.Element[]>([]);

  const refParticlesSmoke = useRef<Sprite | null>(null);

  useEffect(() => {
    if (!allTexturesLoaded) return;
    if (
      textures.smokeParticle !== Texture.EMPTY &&
      parentSize.height > 0 &&
      parentSize.width > 0
    ) {
      const numParticles = 100;
      const particles: JSX.Element[] = [];
      for (let i = 0; i < numParticles; i++) {
        const refParticle = createRef<Sprite>();
        const randColor =
          glowColorsSmoke[Math.floor(Math.random() * glowColorsSmoke.length)];

        const initialX = -200 + Math.random() * 1640;

        particles.push(
          <pixiSprite
            alpha={0.4}
            anchor={0.5}
            eventMode="static"
            key={`particle-${i}`}
            rotation={Math.random() * 40 - 20}
            ref={refParticle}
            scale={Math.random() * 0.2 + 0.8}
            texture={textures.smokeParticle}
            tint={randColor}
            x={initialX}
            y={Math.random() * parentSize.height + 1400}
          />
        );

        setTimeout(() => {
          if (refParticle.current) {
            gsap.to(refParticle.current, {
              pixi: {
                x: 720,
                y: -100,
                alpha: 0,
              },
              delay: Math.random() * 2,
              duration: Math.random() * 6 + 4,
              ease: "power1.out",
              repeat: -1,
              onRepeat: () => {
                if (refParticle.current) {
                  refParticle.current.y = parentSize.height + 1000;
                  refParticle.current.alpha = 0.2;
                }
              },
            });
          }
        }, 300);
      }

      setParticlesSmoke((prevParticles) => {
        if (prevParticles.length === numParticles) {
          return prevParticles;
        }
        return particles;
      });
    }
  }, [allTexturesLoaded, glowColorsSmoke, parentSize, textures.smokeParticle]);

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
