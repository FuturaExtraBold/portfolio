import { type JSX } from "react";
import Background from "./components/Background";
import Beam from "./components/Beam";
import WindowGlow from "./components/WindowGlow";
import Overlay from "./components/Overlay";

export default function Lighthouse(): JSX.Element {
  return (
    <pixiContainer>
      <Background />
      <WindowGlow />
      <Beam />
      <Overlay />
    </pixiContainer>
  );
}
