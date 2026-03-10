import { Assets } from "pixi.js";
import { useEffect, useRef, useState } from "react";

interface UsePixiAssetsOptions {
  texturePaths: Record<string, string>;
  enabled?: boolean;
  onProgress?: (progress: number) => void;
  mapTexture?: (key: string, texture: any) => any;
}

export const usePixiAssets = ({
  texturePaths,
  enabled = true,
  onProgress,
  mapTexture,
}: UsePixiAssetsOptions) => {
  const [textures, setTextures] = useState<Record<string, any>>({});
  const [allTexturesLoaded, setAllTexturesLoaded] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const entries = Object.entries(texturePaths);
    if (!entries.length) return;

    let cancelled = false;
    let loaded = 0;
    const total = entries.length;

    const updateProgress = () => {
      if (cancelled || !mountedRef.current || !onProgress) return;
      loaded += 1;
      onProgress(loaded / total);
    };

    const loadAll = async () => {
      const results = await Promise.all(
        entries.map(([key, path]) =>
          Assets.load(path)
            .then((texture) => ({
              ok: true as const,
              key,
              texture: mapTexture ? mapTexture(key, texture) : texture,
            }))
            .catch((error) => ({ ok: false as const, key, error }))
            .finally(updateProgress),
        ),
      );

      if (cancelled || !mountedRef.current) return;

      const nextTextures: Record<string, any> = {};
      let successCount = 0;

      results.forEach((result) => {
        if (result.ok) {
          nextTextures[result.key] = result.texture;
          successCount += 1;
        }
      });

      setTextures(nextTextures);
      setAllTexturesLoaded(successCount === total);
    };

    loadAll();

    return () => {
      cancelled = true;
    };
  }, [enabled, mapTexture, onProgress, texturePaths]);

  return { textures, allTexturesLoaded };
};
