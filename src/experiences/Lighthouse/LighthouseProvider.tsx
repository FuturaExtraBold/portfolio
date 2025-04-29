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
import Lighthouse from "./Lighthouse";
import { beam, lighthouseBackground, windowGlow } from "./images";

export interface UseLighthouseProps {
  allTexturesLoaded: boolean;
  backgroundRef: RefObject<any>;
  beamRef: RefObject<any>;
  overlayRef: RefObject<any>;
  parentRef: RefObject<HTMLDivElement | null>;
  parentSize: { width: number; height: number };
  parentSizeRef: RefObject<{ width: number; height: number }>;
  textures: Record<string, any>;
  windowGlowRef: RefObject<any>;
}

const LighthouseContext = createContext<UseLighthouseProps | undefined>(
  undefined
);

interface LighthouseProviderProps {
  parentRef: RefObject<HTMLDivElement | null>;
}

export const LighthouseProvider = ({
  parentRef,
}: LighthouseProviderProps): JSX.Element => {
  const parentSizeRef = useRef({ width: 0, height: 0 });
  const backgroundRef = useRef<any>(null);
  const beamRef = useRef<any>(null);
  const overlayRef = useRef<any>(null);
  const windowGlowRef = useRef<any>(null);

  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });
  const [textures, setTextures] = useState<Record<string, any>>({});
  const [allTexturesLoaded, setAllTexturesLoaded] = useState(false);

  const texturePaths = useMemo<Record<string, string>>(() => {
    return {
      lighthouseBackground: lighthouseBackground,
      windowGlow: windowGlow,
      beam: beam,
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
      loadedTextures[key] = await Assets.load(path as string).then((result) => {
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
      console.log("All Lighthouse textures loaded");
      updateParentSize();
    }
  }, [allTexturesLoaded, updateParentSize]);

  const contextValues = useMemo(
    () => ({
      allTexturesLoaded,
      backgroundRef,
      beamRef,
      overlayRef,
      parentRef,
      parentSize,
      parentSizeRef,
      textures,
      windowGlowRef,
    }),
    [allTexturesLoaded, parentRef, parentSize, textures]
  );

  return (
    <LighthouseContext.Provider value={contextValues}>
      {allTexturesLoaded && <Lighthouse />}
    </LighthouseContext.Provider>
  );
};

export const useLighthouse = (): UseLighthouseProps => {
  const context = useContext(LighthouseContext);
  if (!context) {
    throw new Error("useLighthouse must be used within a BenzoProvider");
  }
  return context;
};
