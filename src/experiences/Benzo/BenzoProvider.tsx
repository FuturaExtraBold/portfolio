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
import Benzo from "./Benzo";
import { useApp } from "providers/AppProvider";
import { Assets as AssetPaths } from "./Assets";
import { Spritesheet } from "pixi.js";
import { titleAtlas } from "./data/titleAtlas";

export interface UseBenzoProps {
  allTexturesLoaded: boolean;
  glowProps: { color: number; duration: number };
  glowColorsSmoke: number[];
  parentRef: RefObject<HTMLDivElement | null>;
  parentSize: { width: number; height: number };
  parentSizeRef: RefObject<{ width: number; height: number }>;
  scaleRef: RefObject<number>;
  smokeProps: { color: number; duration: number };
  textures: Record<string, any>;
  renderedLetters: JSX.Element[] | null;
  renderedPatternLetters: JSX.Element[] | null;
}

const BenzoContext = createContext<UseBenzoProps | undefined>(undefined);

interface BenzoProviderProps {
  parentRef: RefObject<HTMLDivElement>;
}

export const BenzoProvider = ({
  parentRef,
}: BenzoProviderProps): JSX.Element => {
  const { setBenzoLoadProgress } = useApp();
  const parentSizeRef = useRef({ width: 0, height: 0 });
  const scaleRef = useRef(0.5);

  const [allTexturesLoaded, setAllTexturesLoaded] = useState(false);
  const [glowProps, setGlowProps] = useState({
    color: 0xffffff,
    duration: 0.5,
  });
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });
  const [smokeProps, setSmokeProps] = useState({
    color: 0xffffff,
    duration: 0.5,
  });
  const [textures, setTextures] = useState<Record<string, any>>({});
  const [renderedLetters, setRenderedLetters] = useState<JSX.Element[] | null>(
    null
  );
  const [renderedPatternLetters, setRenderedPatternLetters] = useState<
    JSX.Element[] | null
  >(null);

  const glowColors = useMemo(
    () => [0x90e575, 0xc48aff, 0xb6ff70, 0xffd966, 0x8cd3ff, 0xff91c2],
    []
  );

  const glowColorsSmoke = useMemo(() => [0x90e575, 0x3bdc6c, 0x1fcf60], []);

  const glowColorsReflection = useMemo(
    () => [0x90e575, 0x3bdc6c, 0x1fcf60],
    []
  );

  const texturePaths = AssetPaths();

  const updateParentSize = useCallback(() => {
    if (parentRef.current) {
      const width = parentRef.current.clientWidth;
      const height = parentRef.current.clientHeight;
      setParentSize({ width, height });
      parentSizeRef.current = { width, height };
    }
  }, [parentRef]);

  const updateGlowProps = useCallback(() => {
    const color = glowColors[Math.floor(Math.random() * glowColors.length)];
    const duration = Math.random() * 3 + 0.5;
    setGlowProps({ color, duration });
    setTimeout(updateGlowProps, duration * 1000);
  }, [glowColors]);

  const updateSmokeProps = useCallback(() => {
    const color =
      glowColorsReflection[
        Math.floor(Math.random() * glowColorsReflection.length)
      ];
    const duration = Math.random() * 3 + 0.5;
    setSmokeProps({ color, duration });
    setTimeout(updateSmokeProps, duration * 1000);
  }, [glowColorsReflection]);

  const loadTextures = useCallback(async () => {
    console.log("Benzo - Provider - loadTextures");
    const loadedTextures: Record<string, any> = {};
    const entries = Object.entries(texturePaths);
    const total = entries.length;
    let loaded = 0;

    for (const [key, path] of entries) {
      try {
        const texture = await Assets.load(path);
        loadedTextures[key] = texture;
        loaded++;
        setBenzoLoadProgress(loaded / total);
      } catch (e) {
        console.error(`Error loading ${key}:`, e);
      }
    }

    if (loaded === total) {
      console.log("Benzo - Provider - All textures loaded complete");
      updateParentSize();
      setTextures(loadedTextures);
      setAllTexturesLoaded(true);
    } else {
      console.warn(`Only ${loaded} out of ${total} textures loaded.`);
    }
  }, [setBenzoLoadProgress, texturePaths, updateParentSize]);

  useEffect(() => {
    loadTextures();
  }, [loadTextures]);

  useEffect(() => {
    if (!parentRef.current) return;
    const observer = new ResizeObserver(() => {
      updateParentSize();
    });
    observer.observe(parentRef.current);
    return () => observer.disconnect();
  }, [parentRef, updateParentSize]);

  useEffect(() => {
    if (allTexturesLoaded) {
      console.log("Benzo - Provider - allTexturesLoaded");
      updateParentSize();
    }
  }, [allTexturesLoaded, updateParentSize]);

  useEffect(() => {
    if (renderedLetters && renderedPatternLetters) {
      console.log("this should trace once!");
      updateParentSize();
    }
  }, [renderedLetters, renderedPatternLetters, updateParentSize]);

  useEffect(() => {
    updateGlowProps();
  }, [updateGlowProps]);

  useEffect(() => {
    updateSmokeProps();
  }, [updateSmokeProps]);

  useEffect(() => {
    if (
      !textures.title ||
      !textures.title.source ||
      !textures.titlePattern ||
      !textures.titlePattern.source
    )
      return;

    const spacing = 10;
    const letters = ["B", "E", "N", "Z", "O"] as const;
    const titleSpritesheet = new Spritesheet(textures.title.source, titleAtlas);
    const patternSpritesheet = new Spritesheet(
      textures.titlePattern.source,
      titleAtlas
    );

    titleSpritesheet.parse().then(() => {
      const rendered = letters.map((letter, index) => {
        let x = titleAtlas.frames[letter].frame.x - spacing * index;
        if (letter === "O") x -= 26;
        const frameTexture = titleSpritesheet.textures[letter];
        return (
          <pixiSprite
            alpha={0}
            anchor={0}
            key={letter}
            texture={frameTexture}
            x={x}
            y={0}
          />
        );
      });
      setRenderedLetters(rendered);
    });

    patternSpritesheet.parse().then(() => {
      const renderedPattern = letters.map((letter, index) => {
        let x = titleAtlas.frames[letter].frame.x - spacing * index;
        if (letter === "O") x -= 26;
        const frameTexture = patternSpritesheet.textures[letter];
        return (
          <pixiSprite
            alpha={0}
            anchor={0}
            key={letter}
            texture={frameTexture}
            x={x}
            y={0}
          />
        );
      });
      setRenderedPatternLetters(renderedPattern);
    });
  }, [textures]);

  const contextValues = useMemo(
    () => ({
      allTexturesLoaded,
      glowProps,
      glowColorsSmoke,
      parentRef,
      parentSize,
      parentSizeRef,
      scaleRef,
      smokeProps,
      textures,
      renderedLetters,
      renderedPatternLetters,
    }),
    [
      allTexturesLoaded,
      glowProps,
      glowColorsSmoke,
      parentRef,
      parentSize,
      parentSizeRef,
      scaleRef,
      smokeProps,
      textures,
      renderedLetters,
      renderedPatternLetters,
    ]
  );

  return (
    <BenzoContext.Provider value={contextValues}>
      <Benzo />
    </BenzoContext.Provider>
  );
};

export const useBenzo = (): UseBenzoProps => {
  const context = useContext(BenzoContext);
  if (!context) {
    throw new Error("useBenzo must be used within a BenzoProvider");
  }
  return context;
};
