import { type JSX, useEffect } from "react";
import { useLighthouse } from "./LighthouseProvider";
import {
  // animateBeam,
  animateLighthouse,
  // animateOverlay,
  animateWindowGlow,
} from "./utils/animations";
import Background from "./components/Background";
import Beam from "./components/Beam";
import WindowGlow from "./components/WindowGlow";
import Overlay from "./components/Overlay";

export default function Lighthouse(): JSX.Element {
  const { beamRef, overlayRef, parentSize, windowGlowRef } = useLighthouse();

  useEffect(() => {
    animateWindowGlow(windowGlowRef);
    animateLighthouse({ beamRef, overlayRef, parentSize });
  }, [beamRef, overlayRef, parentSize, windowGlowRef]);

  return (
    <pixiContainer>
      <Background />
      <WindowGlow />
      <Beam />
      <Overlay />
    </pixiContainer>
  );
}
