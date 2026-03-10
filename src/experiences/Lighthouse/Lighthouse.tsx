import { type JSX } from "react";
import Background from "./components/Background";
import Beam from "./components/Beam";
import Overlay from "./components/Overlay";
import Windows from "./components/Windows";

export default function Lighthouse(): JSX.Element {
  return (
    <pixiContainer>
      <Background />
      <Windows />
      <Beam />
      <Overlay />
    </pixiContainer>
  );
}
