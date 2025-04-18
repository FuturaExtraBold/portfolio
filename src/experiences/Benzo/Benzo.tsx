import { type JSX } from "react";
import {
  BenzoBody,
  BenzoTitle,
  CanvasOverlay,
  CrystalBall,
  GlowBenzo,
  GlowGlasses,
  GlowInner,
  GlowOuter,
  HandLeft,
  HandRight,
  Hypnosis,
  Smoke,
} from "./components";

export default function Benzo(): JSX.Element | null {
  return (
    <>
      <Hypnosis />
      <Smoke />
      <CanvasOverlay />
      <GlowOuter />
      <BenzoBody />
      <GlowBenzo />
      <GlowGlasses />
      <CrystalBall />
      <HandLeft />
      <HandRight />
      <GlowInner />
      <BenzoTitle />
    </>
  );
}
