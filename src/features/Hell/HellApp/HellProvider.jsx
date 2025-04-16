import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Assets } from "pixi.js";
import HellApp from "./HellApp";

import { setPosition, setScale } from "utils/animation";

import { displacementMap, hellBackground } from "./images";

const HellContext = createContext();

export const HellProvider = ({ parentRef }) => {
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
      // console.log("Parent size updated:", width, height);
      setParentSize({ width, height });
      parentSizeRef.current = { width, height };
    }
  }, [parentRef]);

  const loadTextures = useCallback(async () => {
    const loadedTextures = {};
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
      {allTexturesLoaded && <HellApp parentRef={parentRef} />}
    </HellContext.Provider>
  );
};

export const useHell = () => useContext(HellContext);
