import { useBenzo } from "../BenzoProvider";

export default function BenzoTitle() {
  const { allTexturesLoaded, parentSize, textures } = useBenzo();

  if (!allTexturesLoaded || !textures.benzoTitle) return null;

  return (
    <pixiSprite
      alpha={1}
      anchor={0.5}
      eventMode={"static"}
      height={286}
      texture={textures.benzoTitle}
      width={752}
      x={parentSize.width / 2}
      y={180}
    />
  );
}
