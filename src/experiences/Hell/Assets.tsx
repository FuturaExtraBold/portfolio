import { useMemo } from "react";
import { useApp } from "providers/AppProvider";

export const Assets = () => {
  const { assetSize } = useApp();
  const basePath =
    assetSize === "mobile"
      ? "assets/images/experiences/hell/mobile"
      : "assets/images/experiences/hell/desktop";

  const texturePaths = useMemo(() => {
    return {
      hell: `${basePath}/hell.webp`,
      displacementMap: `assets/images/experiences/hell/desktop/displacement_map.webp`,
    };
  }, [basePath]);

  return texturePaths;
};
