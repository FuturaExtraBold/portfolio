import React from "react";
import BenzoNoAnimation from "./BenzoNoAnimation/BenzoNoAnimation";
import Background from "./components/Background";
import BenzoBody from "./components/BenzoBody";
import GlowBenzo from "./components/GlowBenzo";
import GlowGlasses from "./components/GlowGlasses";
import GlowInner from "./components/GlowInner";
import GlowOuter from "./components/GlowOuter";
import Smoke from "./components/Smoke";

export default function Benzo() {
  const layoutMode = true;

  if (layoutMode) return <BenzoNoAnimation />;

  return (
    <pixiContainer>
      <BenzoNoAnimation />
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
