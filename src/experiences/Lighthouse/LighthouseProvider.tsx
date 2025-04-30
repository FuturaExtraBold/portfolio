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

import { animateScale, setPosition, setScale } from "utils/animation";

import Lighthouse from "./Lighthouse";
import {
  beamLeft,
  beamRight,
  lighthouseBackground,
  windowGlow,
} from "./images";

export interface UseLighthouseProps {
  allTexturesLoaded: boolean;
  animateScale: Function;
  backgroundRef: RefObject<any>;
  overlayRef: RefObject<any>;
  parentRef: RefObject<HTMLDivElement | null>;
  parentSize: { width: number; height: number };
  parentSizeRef: RefObject<{ width: number; height: number }>;
  scaleRef: RefObject<number>;
  setPosition: Function;
  setScale: Function;
  textures: Record<string, any>;
  windowGlowRef: RefObject<any>;
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

  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });
  const [textures, setTextures] = useState<Record<string, any>>({});
  const [allTexturesLoaded, setAllTexturesLoaded] = useState(false);

  const texturePaths = useMemo<Record<string, string>>(() => {
    return {
      lighthouseBackground: lighthouseBackground,
      windowGlow: windowGlow,
      beamLeft: beamLeft,
      beamRight: beamRight,
    };
  }, []);

  // const updateParentSize = useCallback(() => {
  //   if (parentRef.current) {
  //     const width = parentRef.current.clientWidth;
  //     const height = parentRef.current.clientHeight;
  //     setParentSize({ width, height });
  //     parentSizeRef.current = { width, height };
  //   }
  // }, [parentRef]);

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
    const parent = parentRef.current;
    if (!parent) return;

    const observer = new ResizeObserver(() => {
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      setParentSize({ width, height });
      parentSizeRef.current = { width, height };
    });

    observer.observe(parent);

    // Set initial size
    const width = parent.clientWidth;
    const height = parent.clientHeight;
    setParentSize({ width, height });
    parentSizeRef.current = { width, height };

    return () => observer.disconnect();
  }, [parentRef]);

  useEffect(() => {
    if (allTexturesLoaded) {
      console.log("All Lighthouse textures loaded");
    }
  }, [allTexturesLoaded]);

  const contextValues = useMemo(
    () => ({
      allTexturesLoaded,
      animateScale,
      backgroundRef,
      overlayRef,
      parentRef,
      parentSize,
      parentSizeRef,
      scaleRef,
      setPosition,
      setScale,
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
