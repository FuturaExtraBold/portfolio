import { useParentSize } from "hooks/useParentSize";
import { usePixiAssets } from "hooks/usePixiAssets";
import { Sprite, Texture } from "pixi.js";
import {
  createContext,
  type JSX,
  RefObject,
  useContext,
  useMemo,
  useRef,
} from "react";

import { Assets as AssetPaths } from "./Assets";
import Lighthouse from "./Lighthouse";

export interface UseLighthouseProps {
  allTexturesLoaded: boolean;
  backgroundRef: RefObject<Sprite | null>;
  beamLeftRef: RefObject<Sprite | null>;
  beamRightRef: RefObject<Sprite | null>;
  overlayRef: RefObject<Sprite | null>;
  parentRef: RefObject<HTMLDivElement | null>;
  parentSize: { width: number; height: number };
  parentSizeRef: RefObject<{ width: number; height: number }>;
  scaleRef: RefObject<number>;
  textures: Record<string, Texture>;
  windowsRef: RefObject<Sprite | null>;
}

const LighthouseContext = createContext<UseLighthouseProps | undefined>(
  undefined,
);

export interface LighthouseProviderProps {
  parentRef: RefObject<HTMLDivElement | null>;
  children?: React.ReactNode;
}

export const LighthouseProvider = ({
  parentRef,
}: LighthouseProviderProps): JSX.Element => {
  const backgroundRef = useRef<Sprite | null>(null);
  const scaleRef = useRef(0.5);
  const overlayRef = useRef<Sprite | null>(null);
  const windowsRef = useRef<Sprite | null>(null);
  const beamLeftRef = useRef<Sprite | null>(null);
  const beamRightRef = useRef<Sprite | null>(null);

  const texturePaths = AssetPaths();

  const { textures, allTexturesLoaded } = usePixiAssets({ texturePaths });

  const { parentSize, parentSizeRef } = useParentSize(parentRef);

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
      windowsRef,
    }),
    [allTexturesLoaded, parentRef, parentSize, parentSizeRef, scaleRef, textures],
  );

  return (
    <LighthouseContext.Provider value={contextValues}>
      <Lighthouse />
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
