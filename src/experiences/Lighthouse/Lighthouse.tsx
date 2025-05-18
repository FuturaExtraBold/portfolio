import { type JSX } from "react";
import Background from "./components/Background";
import Beam from "./components/Beam";
import Windows from "./components/Windows";
import Overlay from "./components/Overlay";

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
