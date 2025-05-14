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
import { Assets, Graphics, Sprite } from "pixi.js";

import Lighthouse from "./Lighthouse";
import { beam, lighthouseBackground, windowGlow } from "./images";

export interface UseLighthouseProps {
  allTexturesLoaded: boolean;
  backgroundRef: RefObject<Sprite | null>;
  beamLeftRef: RefObject<Sprite | null>;
  beamRightRef: RefObject<Sprite | null>;
  overlayRef: RefObject<Graphics | null>;
  parentRef: RefObject<HTMLDivElement | null>;
  parentSize: { width: number; height: number };
  parentSizeRef: RefObject<{ width: number; height: number }>;
  scaleRef: RefObject<number>;
  textures: Record<string, any>;
  windowGlowRef: RefObject<Sprite | null>;
}

const LighthouseContext = createContext<UseLighthouseProps | undefined>(
  undefined
);

export interface LighthouseProviderProps {
  parentRef: RefObject<HTMLDivElement | null>;
  children?: React.ReactNode;
}

export const LighthouseProvider = ({
  parentRef,
}: LighthouseProviderProps): JSX.Element => {
  const backgroundRef = useRef<any>(null);
  const parentSizeRef = useRef({ width: 0, height: 0 });
  const scaleRef = useRef(0.5);
  const overlayRef = useRef<any>(null);
  const windowGlowRef = useRef<any>(null);
  const beamLeftRef = useRef<any>(null);
  const beamRightRef = useRef<any>(null);

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

  const loadTextures = useCallback(async () => {
    console.log("Lighthouse - Provider - loadTextures");
    const loadedTextures: Record<string, any> = {};
    const entries = Object.entries(texturePaths);
    const total = entries.length;
    let loaded = 0;

    for (const [key, path] of entries) {
      try {
        const texture = await Assets.load(path);
        loadedTextures[key] = texture;
        loaded++;
      } catch (e) {
        console.error(`Error loading ${key}:`, e);
      }
    }

    if (loaded === total) {
      console.log("Lighthouse - Provider - All textures loaded complete");
      setTextures(loadedTextures);
      setAllTexturesLoaded(true);
    } else {
      console.warn(`Only ${loaded} out of ${total} textures loaded.`);
    }
  }, [texturePaths]);

  useEffect(() => {
    loadTextures();
  }, [loadTextures]);

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const observer = new ResizeObserver(() => {
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      setParentSize({ width, height });
      parentSizeRef.current = { width, height };
    });

    observer.observe(parent);

    const width = parent.clientWidth;
    const height = parent.clientHeight;
    setParentSize({ width, height });
    parentSizeRef.current = { width, height };

    return () => observer.disconnect();
  }, [parentRef]);

  const contextValues = useMemo(
    () => ({
      allTexturesLoaded,
      backgroundRef,
      beamLeftRef,
      beamRightRef,
      overlayRef,
      parentRef,
      parentSize,
      parentSizeRef,
      scaleRef,
      textures,
      windowGlowRef,
    }),
    [allTexturesLoaded, parentRef, parentSize, scaleRef, textures]
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
    throw new Error("useLighthouse must be used within a LighthouseProvder");
  }
  return context;
};
