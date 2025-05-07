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
} from "./images";

export interface UseBenzoProps {
  allTexturesLoaded: boolean;
  glowProps: { color: number; duration: number };
  glowColorsSmoke: number[];
  parentRef: RefObject<HTMLDivElement | null>;
  parentSize: { width: number; height: number };
  parentSizeRef: RefObject<{ width: number; height: number }>;
  scaleRef: RefObject<number>;
  smokeProps: { color: number; duration: number };
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

  const [allTexturesLoaded, setAllTexturesLoaded] = useState(false);
  const [glowProps, setGlowProps] = useState({
    color: 0xffffff,
    duration: 0.5,
  });
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });
  const [smokeProps, setSmokeProps] = useState({
    color: 0xffffff,
    duration: 0.5,
  });
  const [textures, setTextures] = useState<Record<string, any>>({});

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

  const texturePaths = useMemo(() => {
    return {
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
    };
  }, []);

  const updateParentSize = useCallback(() => {
    if (parentRef.current) {
      console.log("Benzo - Provider - updateParentSize");
      const width = parentRef.current.clientWidth;
      const height = parentRef.current.clientHeight;
      setParentSize({ width, height });
      parentSizeRef.current = { width, height };
    }
  }, [parentRef]);

  const updateGlowProps = useCallback(() => {
    const color = glowColors[Math.floor(Math.random() * glowColors.length)];
    const duration = Math.random() * 3 + 0.5;
    // console.log("Benzo - Provider - updateGlowProps", color, duration);
    setGlowProps({ color, duration });
    setTimeout(updateGlowProps, duration * 1000);
  }, [glowColors]);

  const updateSmokeProps = useCallback(() => {
    const color =
      glowColorsReflection[
        Math.floor(Math.random() * glowColorsReflection.length)
      ];
    const duration = Math.random() * 3 + 0.5;
    // console.log("Benzo - Provider - updateSmokeProps", color, duration);
    setSmokeProps({ color, duration });
    setTimeout(updateSmokeProps, duration * 1000);
  }, [glowColorsReflection]);

  const loadTextures = useCallback(async () => {
    console.log("Benzo - Provider - loadTextures");
    const loadedTextures: Record<string, any> = {};
    for (const [key, path] of Object.entries(texturePaths)) {
      loadedTextures[key] = await Assets.load(path).then((result) => {
        return result;
      });
    }
    console.log("Benzo - Provider - All textures loaded complete");
    updateParentSize();
    setTextures(loadedTextures);
    setAllTexturesLoaded(true);
  }, [texturePaths, updateParentSize]);

  useEffect(() => {
    console.log("Benzo - Provider - loadTextures");
    loadTextures();
  }, [loadTextures]);

  useEffect(() => {
    if (!parentRef.current) return;
    console.log("Benzo - Provider - ResizeObserver");
    const observer = new ResizeObserver(() => {
      updateParentSize();
    });
    observer.observe(parentRef.current);
    return () => observer.disconnect();
  }, [parentRef, updateParentSize]);

  useEffect(() => {
    if (allTexturesLoaded) {
      console.log("Benzo - Provider - allTexturesLoaded");
      updateParentSize();
    }
  }, [allTexturesLoaded, updateParentSize]);

  useEffect(() => {
    console.log("Benzo - Provider - updateGlowProps");
    updateGlowProps();
  }, [updateGlowProps]);

  useEffect(() => {
    console.log("Benzo - Provider - updateSmokeProps");
    updateSmokeProps();
  }, [updateSmokeProps]);

  const contextValues = useMemo(
    () => ({
      allTexturesLoaded,
      glowProps,
      glowColorsSmoke,
      parentRef,
      parentSize,
      parentSizeRef,
      scaleRef,
      smokeProps,
      textures,
    }),
    [
      allTexturesLoaded,
      glowProps,
      glowColorsSmoke,
      parentRef,
      parentSize,
      parentSizeRef,
      scaleRef,
      smokeProps,
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
