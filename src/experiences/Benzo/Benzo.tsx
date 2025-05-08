import { type JSX } from "react";
import {
  BenzoBody,
  BenzoGlow,
  BenzoTitle,
  CanvasOverlay,
  CrystalBall,
  GlowBenzo,
  GlowGlasses,
  HandLeft,
  HandRight,
  Hypnosis,
  Smoke,
} from "./components";

export default function Benzo(): JSX.Element {
  return (
    <pixiContainer>
      <Hypnosis />
      <Smoke />
      <CanvasOverlay />
      <BenzoBody />
      <GlowBenzo />
      <GlowGlasses />
      <CrystalBall />
      <HandLeft />
      <HandRight />
      <BenzoGlow />
      <BenzoTitle />
    </pixiContainer>
  );
}
