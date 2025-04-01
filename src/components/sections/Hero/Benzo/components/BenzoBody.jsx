import React, { useRef } from "react";
import { useBenzo } from "../BenzoProvider";

export default function BenzoBody() {
  const refBenzoBody = useRef(null);

  const { allTexturesLoaded, parentSize, textures } = useBenzo();

  if (!allTexturesLoaded || !textures.benzoBody) return null;

  return (
    <pixiSprite
      eventMode={"static"}
      height={parentSize.height}
      ref={refBenzoBody}
      texture={textures.benzoBody}
      width={parentSize.width}
    />
  );
}
