import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Assets } from "pixi.js";
import Benzo from "./Benzo";

import {
  animateRotation,
  animateScale,
  animateTick,
  animateTint,
  setPosition,
  setScale,
} from "assets/javascripts/utils";

import {
  benzoBackground,
  benzoBody,
  benzoTitle,
  canvasOverlay,
  crystalBall,
  glowBenzo,
  glowGlasses,
  glowInner,
  glowOuter,
  handLeft,
  handRight,
  hypnosis,
  smokeParticle,
} from "./images";

const BenzoContext = createContext();

export const BenzoProvider = ({ parentRef }) => {
  const parentSizeRef = useRef({ width: 0, height: 0 });
  const scaleRef = useRef(0.5);

  const glowColors = useMemo(
    () => [0x00ff00, 0xff0000, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff],
    []
  );

  const glowColorsSmoke = useMemo(
    () => [0x90e575, 0x1bd14a, 0x2ee554, 0xfffffe],
    []
  );

  const glowColorsReflection = useMemo(
    () => [0x90e575, 0x1bd14a, 0x2ee554, 0xfffffe],
    []
  );

  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });
  const [colorCrystalBall, setColorCrystalBall] = useState(0xffffff);
  const [colorSmoke, setColorSmoke] = useState(0xffffff);
  const [durationCrystalBall, setDurationCrystalBall] = useState(0.5);
  const [durationSmoke, setDurationSmoke] = useState(0.5);

  const [textures, setTextures] = useState({});
  const [allTexturesLoaded, setAllTexturesLoaded] = useState(false);

  const texturePaths = useMemo(() => {
    return {
      benzoBackground,
      benzoBody,
      benzoTitle,
      canvasOverlay,
      crystalBall,
      glowBenzo,
      glowGlasses,
      glowInner,
      glowOuter,
      handLeft,
      handRight,
      hypnosis,
      smokeParticle,
    };
  }, []);

  const updateParentSize = useCallback(() => {
    if (parentRef.current) {
      const width = parentRef.current.clientWidth;
      const height = parentRef.current.clientHeight;
      setParentSize({ width, height });
      parentSizeRef.current = { width, height };
    }
  }, [parentRef]);

  const updateCrystalBall = useCallback(() => {
    if (parentRef.current) {
      const color = glowColors[Math.floor(Math.random() * glowColors.length)];
      const duration = Math.random() * 1 + 0.5;
      setColorCrystalBall(color);
      setDurationCrystalBall(duration);
      setTimeout(updateCrystalBall, duration * 1000);
    }
  }, [glowColors, parentRef]);

  const updateReflection = useCallback(() => {
    if (parentRef.current) {
      const color =
        glowColorsReflection[
          Math.floor(Math.random() * glowColorsReflection.length)
        ];
      const duration = Math.random() * 1 + 0.5;
      setColorSmoke(color);
      setDurationSmoke(duration);
      setTimeout(updateReflection, duration * 1000);
    }
  }, [glowColorsReflection, parentRef]);

  const loadTextures = useCallback(async () => {
    const loadedTextures = {};
    for (const [key, path] of Object.entries(texturePaths)) {
      loadedTextures[key] = await Assets.load(path).then((result) => {
        result.source.autoGenerateMipmaps = true;
        console.log("Texture loaded:", key, result);
        return result;
      });
    }
    setTextures(loadedTextures);
    setAllTexturesLoaded(true);
  }, [texturePaths]);

  useEffect(() => {
    loadTextures();
  }, [loadTextures]);

  useEffect(() => {
    if (!parentRef.current) return;
    const observer = new ResizeObserver(() => {
      updateParentSize();
    });
    observer.observe(parentRef.current);
    return () => {
      observer.disconnect();
    };
  }, [parentRef, updateParentSize]);

  useEffect(() => {
    if (allTexturesLoaded) {
      console.log("All Benzo textures loaded");
      updateParentSize();
    }
  }, [allTexturesLoaded, updateParentSize]);

  useEffect(() => {
    updateCrystalBall();
  }, [updateCrystalBall]);

  useEffect(() => {
    updateReflection();
  }, [updateReflection]);

  const contextValues = useMemo(
    () => ({
      allTexturesLoaded,
      animateRotation,
      animateScale,
      animateTick,
      animateTint,
      colorCrystalBall,
      colorSmoke,
      durationCrystalBall,
      durationSmoke,
      glowColorsSmoke,
      parentRef,
      parentSize,
      parentSizeRef,
      scaleRef,
      setPosition,
      setScale,
      textures,
    }),
    [
      allTexturesLoaded,
      colorCrystalBall,
      colorSmoke,
      durationCrystalBall,
      durationSmoke,
      glowColorsSmoke,
      parentRef,
      parentSize,
      parentSizeRef,
      scaleRef,
      textures,
    ]
  );

  return (
    <BenzoContext.Provider value={contextValues}>
      {allTexturesLoaded && <Benzo parentRef={parentRef} />}
    </BenzoContext.Provider>
  );
};

export const useBenzo = () => useContext(BenzoContext);
