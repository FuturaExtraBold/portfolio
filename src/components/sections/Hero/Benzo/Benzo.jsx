import BenzoBody from "./components/BenzoBody";
import GlowBenzo from "./components/GlowBenzo";
import GlowGlasses from "./components/GlowGlasses";
import GlowInner from "./components/GlowInner";
import GlowOuter from "./components/GlowOuter";
import Smoke from "./components/Smoke";

export default function Benzo({ parentRef }) {
  return (
    <pixiContainer resizeTo={parentRef}>
      <Smoke />
      <GlowOuter />
      <BenzoBody />
      <GlowBenzo />
      <GlowInner />
      <GlowGlasses />
    </pixiContainer>
  );
}
