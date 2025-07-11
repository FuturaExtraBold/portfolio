import { type JSX, useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles.scss";

export default function Scroller(): JSX.Element {
  const scrollButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const scrollButton = scrollButtonRef.current;
    scrollButton?.addEventListener("click", () => {
      console.log("Scroll button clicked");
      gsap.to(window, {
        scrollTo: { y: "max" },
        duration: 15,
        ease: "sine.inOut",
        delay: 0,
      });
    });
  }, []);

  return (
    <button
      id="scroll-button"
      aria-label="Scroll to bottom"
      ref={scrollButtonRef}
    ></button>
  );
}
