import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { v4 as uuid } from "uuid";
import { gsap } from "gsap";
import { Assets, Texture } from "pixi.js";
import { PixiPlugin } from "gsap/PixiPlugin";
import imageBenzo from "../../assets/images/benzo/benzo.png";
import imageGlasses from "../../assets/images/benzo/glasses.png";
import imageGlow from "../../assets/images/benzo/glow.png";
import imageGlowInner from "../../assets/images/benzo/glow_inner.png";
import imageMagic from "../../assets/images/benzo/magic.jpg";
import imageParticleFire from "../../assets/images/benzo/particle_fire_bw.png";

export function Benzo({ parentRef }) {
  // register the plugin
  gsap.registerPlugin(PixiPlugin);

  // give the plugin a reference to the PIXI object
  PixiPlugin.registerPIXI(parentRef.current);

  const glowColors = useMemo(
    () => [0x00ff00, 0xff0000, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff],
    []
  );

  const glowColorsFire = useMemo(() => ["1bd14a", "5cd771", "aae288"], []);

  // The Pixi.js `Sprite`
  const refBenzo = useRef(null);
  const refGlasses = useRef(null);
  const refGlow = useRef(null);
  const refGlowInner = useRef(null);
  const refMagic = useRef(null);
  const refBenzoGlow = useRef(null);

  const [textureBenzo, setTextureBenzo] = useState(Texture.EMPTY);
  const [textureGlasses, setTextureGlasses] = useState(Texture.EMPTY);
  const [textureGlow, setTextureGlow] = useState(Texture.EMPTY);
  const [textureGlowInner, setTextureGlowInner] = useState(Texture.EMPTY);
  const [textureMagic, setTextureMagic] = useState(Texture.EMPTY);
  const [textureParticleFire, setTextureParticleFire] = useState(Texture.EMPTY);
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });
  const [fireParticles, setFireParticles] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const updateParentSize = useCallback(() => {
    const width = parentRef.current.clientWidth;
    const height = parentRef.current.clientHeight;
    setParentSize({ width, height });
  }, [parentRef]);

  useEffect(() => {
    window.addEventListener("resize", updateParentSize);
    updateParentSize();
  }, [updateParentSize]);

  // Preload the sprites if they haven't been loaded yet
  useEffect(() => {
    if (textureGlasses === Texture.EMPTY) {
      Assets.load(imageGlasses).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("glasses texture loaded", result);
        setTextureGlasses(result);
      });
    }
  }, [textureGlasses]);

  useEffect(() => {
    if (textureGlowInner === Texture.EMPTY) {
      Assets.load(imageGlowInner).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("glow inner texture loaded", result);
        setTextureGlowInner(result);
      });
    }
  }, [textureGlowInner]);

  useEffect(() => {
    if (textureBenzo === Texture.EMPTY) {
      Assets.load(imageBenzo).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("benzo texture loaded", result);
        setTextureBenzo(result);
      });
    }
  }, [textureBenzo]);

  useEffect(() => {
    if (textureGlow === Texture.EMPTY) {
      Assets.load(imageGlow).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("glow texture loaded", result);
        setTextureGlow(result);
      });
    }
  }, [textureGlow]);

  useEffect(() => {
    if (textureMagic === Texture.EMPTY) {
      Assets.load(imageMagic).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("magic texture loaded", result);
        setTextureMagic(result);
      });
    }
  }, [textureMagic]);

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
    if (refGlowInner.current && refGlasses.current && refBenzoGlow.current) {
      const flicker = () => {
        const randColor =
          glowColors[Math.floor(Math.random() * glowColors.length)];
        const randDuration = Math.random() * 1 + 0.5;

        gsap.to(refGlowInner.current, {
          pixi: { tint: randColor },
          duration: randDuration,
        });

        gsap.to(refGlow.current, {
          pixi: { tint: randColor },
          duration: randDuration,
        });

        gsap.to(refGlasses.current, {
          pixi: { tint: randColor },
          duration: randDuration,
          onComplete: flicker,
        });

        gsap.to(refBenzoGlow.current, {
          pixi: { tint: randColor },
          duration: randDuration,
        });
      };
      flicker();
    }
  }, [glowColors, refBenzoGlow, refGlasses, refGlow, refGlowInner]);

  useEffect(() => {
    if (textureParticleFire !== Texture.EMPTY && parentSize.height > 0) {
      const particles = [];
      for (let i = 0; i < 200; i++) {
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
              delay: Math.random() * 1, // Slight delay before restarting
              duration: Math.random() * 4 + 1.5, // Random duration for natural variation
              ease: "power1.out",
              repeat: -1,
              repeatDelay: Math.random() * 0.5, // Slight delay before restarting
              onRepeat: () => {
                if (refParticle.current) {
                  refParticle.current.y = parentSize.height + 1000; // Reset position at the bottom
                  refParticle.current.alpha = 1; // Reset visibility
                }
              },
            });
          }
        }, 100); // Staggered start to avoid uniform movement
      }

      setFireParticles(particles);
    }
  }, [glowColorsFire, parentSize, textureParticleFire]);

  return (
    <pixiContainer>
      {/* <pixiSprite
        eventMode={"static"}
        height={parentSize.height}
        onClick={(event) => setIsActive(!isActive)}
        ref={refMagic}
        roundPixels={true}
        texture={textureMagic}
        width={parentSize.width}
      /> */}
      {fireParticles}
      <pixiSprite
        alpha="0.8"
        eventMode={"static"}
        height={parentSize.height}
        onClick={(event) => setIsActive(!isActive)}
        ref={refGlow}
        texture={textureGlow}
        tint="#ff0000"
        width={parentSize.width}
      />
      <pixiSprite
        eventMode={"static"}
        height={parentSize.height}
        onClick={(event) => setIsActive(!isActive)}
        ref={refBenzo}
        texture={textureBenzo}
        width={parentSize.width}
      />
      <pixiSprite
        alpha={0.25}
        eventMode={"static"}
        height={parentSize.height}
        onClick={(event) => setIsActive(!isActive)}
        ref={refBenzoGlow}
        texture={textureBenzo}
        width={parentSize.width}
      />
      <pixiSprite
        alpha="1"
        eventMode={"static"}
        height={parentSize.height}
        onClick={(event) => setIsActive(!isActive)}
        ref={refGlowInner}
        roundPixels={true}
        texture={textureGlowInner}
        tint="#ff0000"
        width={parentSize.width}
      />
      <pixiSprite
        alpha="0.5"
        eventMode={"static"}
        height={parentSize.height}
        onClick={(event) => setIsActive(!isActive)}
        ref={refGlasses}
        texture={textureGlasses}
        tint="#00ff00"
        width={parentSize.width}
      />
    </pixiContainer>
  );
}
