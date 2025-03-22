import React from "react";
import Background from "./components/Background";
import BenzoBody from "./components/BenzoBody";
import GlowBenzo from "./components/GlowBenzo";
import GlowGlasses from "./components/GlowGlasses";
import GlowInner from "./components/GlowInner";
import GlowOuter from "./components/GlowOuter";
import Smoke from "./components/Smoke";

export default function Benzo() {
  return (
    <pixiContainer>
      <Background />
      <Smoke />
      <GlowOuter />
      <BenzoBody />
      <GlowBenzo />
      <GlowInner />
      <GlowGlasses />
    </pixiContainer>
  );
}
