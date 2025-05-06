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
import { Assets, DisplacementFilter, Sprite, TilingSprite } from "pixi.js";
import Hell from "./Hell";

import { displacementMap, hellBackground } from "./images";

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

  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });
  const [textures, setTextures] = useState({});
  const [allTexturesLoaded, setAllTexturesLoaded] = useState(false);
  const [displacementFilter, setDisplacementFilter] =
    useState<DisplacementFilter | null>(null);

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
    }
  }, [parentRef]);

  const loadTextures = useCallback(async () => {
    const loadedTextures: Record<string, any> = {};
    for (const [key, path] of Object.entries(texturePaths)) {
      loadedTextures[key] = await Assets.load(path).then((result) => {
        result.source.autoGenerateMipmaps = true;
        return result;
      });
    }
    console.log("Hell - All textures loaded");
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
      updateParentSize();
    }
  }, [allTexturesLoaded, updateParentSize]);

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
