import { useParentSize } from "hooks/useParentSize";
import { usePixiAssets } from "hooks/usePixiAssets";
import { DisplacementFilter, Sprite, Texture, TilingSprite } from "pixi.js";
import {
  createContext,
  type JSX,
  RefObject,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Assets as AssetPaths } from "./Assets";
import Hell from "./Hell";

export interface UseHellProps {
  allTexturesLoaded: boolean;
  displacementFilter: DisplacementFilter | null;
  displacementMapRef: RefObject<TilingSprite | null>;
  parentRef: RefObject<HTMLDivElement | null>;
  parentSize: { width: number; height: number };
  textures: Record<string, Texture>;
}

const HellContext = createContext<UseHellProps | undefined>(undefined);

interface HellProviderProps {
  parentRef: RefObject<HTMLDivElement | null>;
}

export const HellProvider = ({ parentRef }: HellProviderProps): JSX.Element => {
  const displacementMapRef = useRef<TilingSprite | null>(null);
  const [displacementFilter, setDisplacementFilter] =
    useState<DisplacementFilter | null>(null);

  const texturePaths = AssetPaths();

  const { textures, allTexturesLoaded } = usePixiAssets({
    texturePaths,
    mapTexture: (_, texture) => {
      texture.source.autoGenerateMipmaps = true;
      return texture;
    },
  });

  const { parentSize } = useParentSize(parentRef);

  useEffect(() => {
    if (!displacementMapRef.current) return;
    const displacementSprite = new Sprite(displacementMapRef.current);
    const displacementFilter = new DisplacementFilter(displacementSprite);
    setDisplacementFilter(displacementFilter);
  }, [allTexturesLoaded, displacementMapRef]);

  const contextValues = useMemo(
    () => ({
      allTexturesLoaded,
      displacementFilter,
      displacementMapRef,
      parentRef,
      parentSize,
      textures,
    }),
    [allTexturesLoaded, displacementFilter, parentRef, parentSize, textures],
  );

  return (
    <HellContext.Provider value={contextValues}>
      <Hell />
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
