import { useMemo } from "react";
import { useViewport } from "providers/AppProvider";

export const Assets = () => {
  const { assetSize } = useViewport();
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
