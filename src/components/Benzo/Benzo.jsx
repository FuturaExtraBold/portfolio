import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { gsap } from "gsap";
import { Assets, Texture } from "pixi.js";
import { useBenzo } from "./BenzoProvider";
import { Background } from "./components/Background";
import imageParticleFire from "../../assets/images/benzo/particle_fire_bw.png";
import BenzoBody from "./components/BenzoBody";
import GlowBenzo from "./components/GlowBenzo";
import GlowGlasses from "./components/GlowGlasses";
import GlowInner from "./components/GlowInner";
import GlowOuter from "./components/GlowOuter";

export function Benzo({ parentRef }) {
  const { glowColorsFire, parentSize } = useBenzo();

  const [textureParticleFire, setTextureParticleFire] = useState(Texture.EMPTY);
  const [fireParticles, setFireParticles] = useState([]);

  useEffect(() => {
    if (textureParticleFire === Texture.EMPTY) {
      Assets.load(imageParticleFire).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("particle fire texture loaded", result);
        setTextureParticleFire(result);
      });
    }
  }, [textureParticleFire]);

  useEffect(() => {
    if (textureParticleFire !== Texture.EMPTY && parentSize.height > 0) {
      const particles = [];
      for (let i = 0; i < 100; i++) {
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
            texture={textureParticleFire}
            tint={randColor}
            x={Math.random() * parentSize.width}
            y={Math.random() * parentSize.height + 2000}
          />
        );

        setTimeout(() => {
          if (refParticle.current) {
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
        }, 10); // Staggered start to avoid uniform movement
      }

      setFireParticles(particles);
    }
  }, [glowColorsFire, parentSize, textureParticleFire]);

  return (
    <pixiContainer width={parentSize.width} height={parentSize.height}>
      <Background />
      {fireParticles}
      <GlowOuter />
      <BenzoBody />
      <GlowBenzo />
      <GlowInner />
      <GlowGlasses />
    </pixiContainer>
  );
}
