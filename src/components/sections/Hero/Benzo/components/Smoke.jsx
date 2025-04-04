import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { gsap } from "gsap";
import { Texture } from "pixi.js";
import { useBenzo } from "../BenzoProvider";

export default function Smoke() {
  const refParticlesSmoke = useRef(null);

  const [particlesSmoke, setParticlesSmoke] = useState([]);

  const { allTexturesLoaded, glowColorsSmoke, parentSize, textures } =
    useBenzo();

  useEffect(() => {
    if (
      textures.smokeParticle !== Texture.EMPTY &&
      parentSize.height > 0 &&
      parentSize.width > 0
    ) {
      const numParticles = 300;
      const particles = [];
      for (let i = 0; i < numParticles; i++) {
        const refParticle = React.createRef();
        const randColor =
          glowColorsSmoke[Math.floor(Math.random() * glowColorsSmoke.length)];

        const initialX = -200 + Math.random() * 1640;

        particles.push(
          <pixiSprite
            alpha={0.2}
            anchor={0.5}
            eventMode={"static"}
            key={uuid()}
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
  }, [glowColorsSmoke, parentSize, textures.smokeParticle]);

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
