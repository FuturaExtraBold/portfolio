import { type JSX, useRef } from "react";
import { Sprite } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
import { titleAtlas } from "../data/titleData";
import TitleLetter from "./TitleLetter";

export default function BenzoTitle(): JSX.Element | null {
  const { allTexturesLoaded } = useBenzo();
  const titleRef = useRef<Sprite | null>(null);

  if (!allTexturesLoaded) return null;
  const scale = 0.5;
  // const letters = ["B", "E", "N", "Z", "O"] as const;
  const spacing = 96;

  return (
    <pixiContainer ref={titleRef}>
      <TitleLetter
        // key={letter}
        letter={"B"}
        x={0}
        y={0}
        scale={scale}
      />
      <TitleLetter
        // key={letter}
        letter={"E"}
        x={(titleAtlas.frames.E.frame.x - spacing) * scale}
        y={0}
        scale={scale}
      />
      <TitleLetter
        // key={letter}
        letter={"N"}
        x={(titleAtlas.frames.N.frame.x - spacing * 2) * scale}
        y={0}
        scale={scale}
      />
      <TitleLetter
        // key={letter}
        letter={"Z"}
        x={(titleAtlas.frames.Z.frame.x - spacing * 3) * scale}
        y={0}
        scale={scale}
      />
      <TitleLetter
        // key={letter}
        letter={"O"}
        x={(titleAtlas.frames.O.frame.x - (spacing + 10) * 4) * scale}
        y={0}
        scale={scale}
      />
    </pixiContainer>
  );
}
