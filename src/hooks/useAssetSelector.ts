import { useViewport } from "providers/AppProvider";
import type { AssetSize } from "hooks/useViewport";

export const useAssetSelector = (): AssetSize => {
  const { assetSize } = useViewport();
  return assetSize as AssetSize;
};
