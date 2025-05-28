import { type JSX } from "react";
import { useBenzo } from "../BenzoProvider";
import { useApp } from "providers/AppProvider";

export default function Layout(): JSX.Element | null {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();
  const { assetSize } = useApp();

  if (!allTexturesLoaded || !textures.layout) return null;

  return (
    <pixiSprite
      width={parentSize.width}
      height={parentSize.height}
      texture={textures.layout}
    />
  );
}
