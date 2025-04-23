import {
  createContext,
  RefObject,
  type JSX,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Assets } from "pixi.js";
import Lighthouse from "./Lighthouse";

export interface UseLighthouseProps {
  allTexturesLoaded: boolean;
  parentRef: RefObject<HTMLDivElement | null>;
  textures: Record<string, any>;
}

const LighthouseContext = createContext<UseLighthouseProps | undefined>(
  undefined
);

interface LighthouseProviderProps {
  parentRef: RefObject<HTMLDivElement>;
}

export const LighthouseProvider = ({
  parentRef,
}: LighthouseProviderProps): JSX.Element => {
  const [textures, setTextures] = useState<Record<string, any>>({});
  const [allTexturesLoaded, setAllTexturesLoaded] = useState(false);

  const texturePaths = useMemo<Record<string, string>>(() => {
    return {};
  }, []);

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

  const contextValues = useMemo(
    () => ({
      allTexturesLoaded,
      parentRef,
      textures,
    }),
    [allTexturesLoaded, parentRef, textures]
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
