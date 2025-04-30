import { type JSX, useEffect } from "react";
import Heat from "./components/Heat";
import { animateDisplacementMap } from "./utils/animations";
import { useHell } from "./HellProvider";

export default function Hell(): JSX.Element {
  const { displacementMapRef } = useHell();

  useEffect(() => {
    animateDisplacementMap({ displacementMapRef });
  }, [displacementMapRef]);

  return (
    <pixiContainer>
      <Heat />
    </pixiContainer>
  );
}
