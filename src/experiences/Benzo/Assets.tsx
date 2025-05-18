import { useMemo } from "react";
import { useApp } from "providers/AppProvider";

export const Assets = () => {
  const { assetSize } = useApp();
  const basePath =
    assetSize === "mobile"
      ? "assets/images/experiences/benzo/mobile"
      : "assets/images/experiences/benzo/desktop";

  const texturePaths = useMemo(() => {
    return {
      crystalBall: `${basePath}/crystal_ball.png`,
      benzoBody: `${basePath}/benzo.webp`,
      glasses: `${basePath}/glasses.png`,
      halo: `${basePath}/halo.png`,
    };
  }, [basePath]);

  return texturePaths;
};
