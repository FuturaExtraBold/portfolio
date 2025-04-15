import { useHell } from "../HellProvider";

export default function Background() {
  const { allTexturesLoaded, parentSize, textures } = useHell();

  if (!allTexturesLoaded || !textures.hellBackground) return null;

  return (
    <pixiSprite
      alpha={1}
      eventMode={"static"}
      height={parentSize.height}
      texture={textures.hellBackground}
      width={parentSize.width}
    />
  );
}
