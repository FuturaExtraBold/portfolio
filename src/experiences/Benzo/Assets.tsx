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
      crystalBall: `assets/images/experiences/benzo/desktop/cb_ball.webp`,
      crystalBallReflection: `assets/images/experiences/benzo/desktop/cb_reflection.webp`,
      benzoBody: `${basePath}/benzo.webp`,
      glasses: `${basePath}/glasses.png`,
      halo: `${basePath}/halo.webp`,
      handLeft: `${basePath}/hand_left.webp`,
      handRight: `${basePath}/hand_right.webp`,
      hypnosis: `${basePath}/hypnosis.jpg`,
      smokeParticle: `${basePath}/smoke.webp`,
      titleNew: `${basePath}/title.webp`,
      theGreat: `${basePath}/the_great.png`,
    };
  }, [basePath]);

  return texturePaths;
};
