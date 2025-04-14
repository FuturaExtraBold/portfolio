import BenzoBody from "./components/BenzoBody";
import BenzoTitle from "./components/BenzoTitle";
import CanvasOverlay from "./components/CanvasOverlay";
import CrystalBall from "./components/CrystalBall";
import GlowBenzo from "./components/GlowBenzo";
import GlowGlasses from "./components/GlowGlasses";
import GlowInner from "./components/GlowInner";
import GlowOuter from "./components/GlowOuter";
import HandLeft from "./components/HandLeft";
import HandRight from "./components/HandRight";
import Hypnosis from "./components/Hypnosis";
import Smoke from "./components/Smoke";

export default function Benzo({ parentRef }) {
  return (
    <pixiContainer resizeTo={parentRef}>
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
    </pixiContainer>
  );
}
