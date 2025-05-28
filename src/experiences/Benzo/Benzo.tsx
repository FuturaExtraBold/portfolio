import { type JSX } from "react";
import {
  BenzoBody,
  BenzoGlow,
  Halo,
  BenzoTitle,
  CrystalBall,
  Glasses,
  HandLeft,
  HandRight,
  Hypnosis,
  Smoke,
  // Layout,
} from "./components";

export default function Benzo(): JSX.Element {
  return (
    <pixiContainer>
      <Hypnosis />
      <Smoke />
      <BenzoBody />
      <BenzoGlow />
      {/* <Glasses /> */}
      <CrystalBall />
      <HandLeft />
      <HandRight />
      {/* <Halo /> */}
      {/* <BenzoTitle /> */}
      {/* <Layout /> */}
    </pixiContainer>
  );
}
