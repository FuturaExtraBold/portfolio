import { useState } from "react";

type AssetSize = "mobile" | "desktop";

export const useAssetSelector = (): AssetSize => {
  const getInitialAssetSize = (): AssetSize => {
    return window.innerWidth <= 768 ? "mobile" : "desktop";
  };

  const [assetSize] = useState<AssetSize>(getInitialAssetSize);

  return assetSize;
};
