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
import Hell from "./Hell";

import { setPosition, setScale } from "utils/animation";

import { displacementMap, hellBackground } from "./images";

export interface UseHellProps {
  allTexturesLoaded: boolean;
  parentRef: RefObject<HTMLDivElement | null>;
  parentSize: { width: number; height: number };
  parentSizeRef: RefObject<{ width: number; height: number }>;
  scaleRef: RefObject<number>;
  setPosition: Function;
  setScale: Function;
  textures: Record<string, any>;
}

const HellContext = createContext<UseHellProps | undefined>(undefined);

interface HellProviderProps {
  parentRef: RefObject<HTMLDivElement | null>;
}

export const HellProvider = ({ parentRef }: HellProviderProps): JSX.Element => {
  const parentSizeRef = useRef({ width: 0, height: 0 });
  const scaleRef = useRef(0.5);

  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });
  const [textures, setTextures] = useState({});
  const [allTexturesLoaded, setAllTexturesLoaded] = useState(false);

  const texturePaths = useMemo(() => {
    return {
      displacementMap: displacementMap,
      hellBackground: hellBackground,
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

  const loadTextures = useCallback(async () => {
    const loadedTextures: Record<string, any> = {};
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
    updateParentSize();
    return () => observer.disconnect();
  }, [parentRef, updateParentSize]);

  useEffect(() => {
    if (allTexturesLoaded) {
      console.log("All Hell textures loaded");
      updateParentSize();
    }
  }, [allTexturesLoaded, updateParentSize]);

  const contextValues = useMemo(
    () => ({
      allTexturesLoaded,
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
      parentRef,
      parentSize,
      parentSizeRef,
      scaleRef,
      textures,
    ]
  );

  return (
    <HellContext.Provider value={contextValues}>
      {allTexturesLoaded && <Hell />}
    </HellContext.Provider>
  );
};

export const useHell = (): UseHellProps => {
  const context = useContext(HellContext);
  if (!context) {
    throw new Error("useHell must be used within a HellProvider");
  }
  return context;
};
