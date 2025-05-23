import { useMemo } from "react";
import { useApp } from "providers/AppProvider";

export const Assets = () => {
  const { assetSize } = useApp();
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
