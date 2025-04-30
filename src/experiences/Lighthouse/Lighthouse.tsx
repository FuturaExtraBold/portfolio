import { type JSX, useEffect } from "react";
import { useLighthouse } from "./LighthouseProvider";
import { animateBeams, animateWindowGlow } from "./utils/animations";
import Background from "./components/Background";
import Beam from "./components/Beam";
import WindowGlow from "./components/WindowGlow";
import Overlay from "./components/Overlay";

export default function Lighthouse(): JSX.Element {
  const { beamLeftRef, beamRightRef, parentSize, windowGlowRef } =
    useLighthouse();

  useEffect(() => {
    animateWindowGlow(windowGlowRef);
    animateBeams({ beamLeftRef, beamRightRef, parentSize });
  }, [beamLeftRef, beamRightRef, parentSize, windowGlowRef]);

  return (
    <pixiContainer>
      <Background />
      <WindowGlow />
      <Beam />
      <Overlay />
    </pixiContainer>
  );
}
