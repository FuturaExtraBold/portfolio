import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { gsap } from "gsap";
import { Assets, Texture } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import imageParticleSmoke from "../../../assets/images/benzo/particle_smoke.png";

export default function Smoke() {
  const refParticlesSmoke = useRef(null);

  const [textureParticleSmoke, setTextureParticleSmoke] = useState(
    Texture.EMPTY
  );
  const [particlesSmoke, setParticlesSmoke] = useState([]);

  const { glowColorsFire, parentSize } = useBenzo();

  useEffect(() => {
    if (textureParticleSmoke === Texture.EMPTY) {
      Assets.load(imageParticleSmoke).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("smoke particle texture loaded", result);
        setTextureParticleSmoke(result);
      });
    }
  }, [textureParticleSmoke]);

  useEffect(() => {
    if (textureParticleSmoke !== Texture.EMPTY && parentSize.height > 0) {
      const numParticles = 300;
      const particles = [];
      for (let i = 0; i < numParticles; i++) {
        const refParticle = React.createRef();
        const randColor =
          glowColorsFire[Math.floor(Math.random() * glowColorsFire.length)];

        particles.push(
          <pixiSprite
            alpha={1}
            anchor={0.5}
            eventMode={"static"}
            key={uuid()}
            rotation={Math.random() * 40 - 20}
            ref={refParticle}
            texture={textureParticleSmoke}
            tint={randColor}
            x={Math.random() * parentSize.width}
            y={Math.random() * parentSize.height + 2000}
          />
        );

        setTimeout(() => {
          if (refParticle.current) {
            // console.log("refParticle.current", refParticle.current);
            gsap.to(refParticle.current, {
              pixi: {
                x: Math.random() * parentSize.width,
                y: -800, // Moves past the top slightly for effect
                alpha: 0.4,
              }, // Fade out slightly as it rises
              // delay: Math.random() * 1, // Slight delay before restarting
              duration: Math.random() * 4 + 2, // Random duration for natural variation
              ease: "power1.out",
              repeat: -1,
              // repeatDelay: Math.random() * 0.25, // Slight delay before restarting
              onRepeat: () => {
                if (refParticle.current) {
                  refParticle.current.y = parentSize.height + 1000; // Reset position at the bottom
                  refParticle.current.alpha = 1; // Reset visibility
                }
              },
            });
          }
        }, 300); // Staggered start to avoid uniform movement
      }

      setParticlesSmoke((prevParticles) => {
        if (prevParticles.length === numParticles) {
          return prevParticles;
        }
        return particles;
      });
    }
  }, [glowColorsFire, parentSize, textureParticleSmoke]);

  return (
    <pixiContainer ref={refParticlesSmoke}>{particlesSmoke}</pixiContainer>
  );
}
