import gsap from "gsap";
import { type JSX, useCallback } from "react";
import "./styles.scss";

export default function Scroller(): JSX.Element {
  const handleClick = useCallback(() => {
    gsap.to(window, {
      scrollTo: { y: "max" },
      duration: 15,
      ease: "sine.inOut",
      delay: 0,
    });
  }, []);

  return (
    <button
      id="scroll-button"
      aria-label="Scroll to bottom"
      onClick={handleClick}
    ></button>
  );
}
