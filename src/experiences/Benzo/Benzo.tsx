import { type JSX } from "react";
import {
  BenzoBody,
  Halo,
  CrystalBall,
  Glasses,
  HandLeft,
  HandRight,
  Hypnosis,
  Smoke,
  Title,
} from "./components";
import TheGreat from "./components/TheGreat";

export default function Benzo(): JSX.Element {
  return (
    <pixiContainer>
      <Hypnosis />
      <Smoke />
      <BenzoBody />
      <Glasses />
      <CrystalBall />
      <HandLeft />
      <HandRight />
      <Halo />
      <Title />
      <TheGreat />
    </pixiContainer>
  );
}
