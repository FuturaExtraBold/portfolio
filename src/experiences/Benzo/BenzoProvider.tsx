import {
  createContext,
  RefObject,
  type JSX,
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
} from "utils/animation";

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
  title,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
} from "./images";

export interface UseBenzoProps {
  allTexturesLoaded: boolean;
  animateRotation: Function;
  animateScale: Function;
  animateTick: Function;
  animateTint: Function;
  colorCrystalBall: number;
  colorSmoke: number;
  durationCrystalBall: number;
  durationSmoke: number;
  glowColorsSmoke: number[];
  parentRef: RefObject<HTMLDivElement | null>;
  parentSize: { width: number; height: number };
  parentSizeRef: RefObject<{ width: number; height: number }>;
  scaleRef: RefObject<number>;
  setPosition: Function;
  setScale: Function;
  textures: Record<string, any>;
}

const BenzoContext = createContext<UseBenzoProps | undefined>(undefined);

interface BenzoProviderProps {
  parentRef: RefObject<HTMLDivElement>;
}

export const BenzoProvider = ({
  parentRef,
}: BenzoProviderProps): JSX.Element => {
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

  const [textures, setTextures] = useState<Record<string, any>>({});
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
      title,
      title1,
      title2,
      title3,
      title4,
      title5,
      title6,
      title7,
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
    const loadedTextures: Record<string, any> = {};
    for (const [key, path] of Object.entries(texturePaths)) {
      loadedTextures[key] = await Assets.load(path).then((result) => {
        result.source.autoGenerateMipmaps = true;
        return result;
      });
    }
    console.log("Benzo - All textures loaded");
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
    return () => observer.disconnect();
  }, [parentRef, updateParentSize]);

  useEffect(() => {
    if (allTexturesLoaded) {
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
      {allTexturesLoaded && <Benzo />}
    </BenzoContext.Provider>
  );
};

export const useBenzo = (): UseBenzoProps => {
  const context = useContext(BenzoContext);
  if (!context) {
    throw new Error("useBenzo must be used within a BenzoProvider");
  }
  return context;
};
