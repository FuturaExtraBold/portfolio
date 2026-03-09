import {
  createContext,
  RefObject,
  type JSX,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { DisplacementFilter, Sprite, TilingSprite } from "pixi.js";
import { Assets as AssetPaths } from "./Assets";
import { usePixiAssets } from "hooks/usePixiAssets";
import { useParentSize } from "hooks/useParentSize";
import Hell from "./Hell";

export interface UseHellProps {
  allTexturesLoaded: boolean;
  displacementFilter: DisplacementFilter | null;
  displacementMapRef: RefObject<TilingSprite | any>;
  parentRef: RefObject<HTMLDivElement | null>;
  parentSize: { width: number; height: number };
  textures: Record<string, any>;
}

const HellContext = createContext<UseHellProps | undefined>(undefined);

interface HellProviderProps {
  parentRef: RefObject<HTMLDivElement | null>;
}

export const HellProvider = ({ parentRef }: HellProviderProps): JSX.Element => {
  const displacementMapRef = useRef<any>(null);
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
    var displacementSprite = new Sprite(displacementMapRef.current);
    var displacementFilter = new DisplacementFilter(displacementSprite);
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
    [allTexturesLoaded, displacementFilter, parentRef, parentSize, textures]
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
