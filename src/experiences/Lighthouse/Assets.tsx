import { useMemo } from "react";
import { useViewport } from "providers/AppProvider";

export const Assets = () => {
  const { assetSize } = useViewport();
  const basePath =
    assetSize === "mobile"
      ? "assets/images/experiences/lighthouse/mobile"
      : "assets/images/experiences/lighthouse/desktop";

  const texturePaths = useMemo(() => {
    return {
      beam: `${basePath}/beam.png`,
      lighthouse: `${basePath}/lighthouse.webp`,
      windows: `${basePath}/windows.png`,
      overlay: "assets/images/experiences/lighthouse/mobile/flash.webp",
    };
  }, [basePath]);

  return texturePaths;
};
