import { type JSX, useEffect } from "react";
import { useLighthouse } from "./LighthouseProvider";
import {
  animateBeams,
  animateFlash,
  animateWindowGlow,
} from "./utils/animations";
import Background from "./components/Background";
import Beam from "./components/Beam";
import WindowGlow from "./components/WindowGlow";
import Overlay from "./components/Overlay";

export default function Lighthouse(): JSX.Element {
  const { beamLeftRef, beamRightRef, overlayRef, parentSize, windowGlowRef } =
    useLighthouse();

  useEffect(() => {
    animateBeams({ beamLeftRef, beamRightRef, parentSize });
    animateFlash({ overlayRef });
    animateWindowGlow({ windowGlowRef });
  }, [beamLeftRef, beamRightRef, overlayRef, parentSize, windowGlowRef]);

  return (
    <pixiContainer>
      <Background />
      <WindowGlow />
      <Beam />
      <Overlay />
    </pixiContainer>
  );
}
