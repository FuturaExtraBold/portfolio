import { type JSX } from "react";
import { useLighthouse } from "../LighthouseProvider";

const WindowGlow = (): JSX.Element | null => {
  const { allTexturesLoaded, parentSize, textures, windowGlowRef } =
    useLighthouse();

  if (!allTexturesLoaded || !textures.windowGlow) return null;

  return (
    <pixiSprite
      ref={windowGlowRef}
      alpha={1}
      height={parentSize.height}
      texture={textures.windowGlow}
      width={parentSize.width}
    />
  );
};

export default WindowGlow;
