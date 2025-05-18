import { type JSX } from "react";
import {
  BenzoBody,
  BenzoGlow,
  Halo,
  // BenzoTitle,
  // CanvasOverlay,
  CrystalBall,
  Glasses,
  // HandLeft,
  // HandRight,
  // Hypnosis,
  // Smoke,
} from "./components";

export default function Benzo(): JSX.Element {
  return (
    <pixiContainer>
      {/* <Hypnosis /> */}
      {/* <Smoke /> */}
      {/* <CanvasOverlay /> */}
      <BenzoBody />
      <BenzoGlow />
      <Glasses />
      <Halo />
      <CrystalBall />
      {/* <HandLeft /> */}
      {/* <HandRight /> */}
      {/* <BenzoTitle /> */}
    </pixiContainer>
  );
}
