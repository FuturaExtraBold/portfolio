import { useBenzo } from "../BenzoProvider";

export default function Background() {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();

  if (!allTexturesLoaded || !textures.benzoBackground) return null;

  return (
    <pixiSprite
      alpha={1}
      eventMode={"static"}
      height={parentSize.height}
      texture={textures.benzoBackground}
      width={parentSize.width}
    />
  );
}
