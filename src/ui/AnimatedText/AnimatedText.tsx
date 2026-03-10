import "./styles.scss";

import gsap from "gsap";
import { useGsapContext } from "hooks/useGsapContext";
import { type JSX, useRef } from "react";

interface AnimatedTextProps {
  center?: boolean;
  text?: string;
}

export default function AnimatedText({
  center = false,
  text,
}: AnimatedTextProps): JSX.Element {
  const elRef = useRef<HTMLSpanElement | null>(null);

  useGsapContext(
    () => {
      if (!elRef.current) return;

      let resolvedText = text || "";
      if (text) {
        resolvedText = text
          .split(" ")
          .map((word) => {
            return `<span class="animated-text__word">${word
              .split("")
              .map((char) => `<span class="animated-text__char">${char}</span>`)
              .join("")}</span>`;
          })
          .join("&nbsp;");
      }

      elRef.current!.innerHTML = resolvedText;
      const chars = elRef.current!.querySelectorAll(".animated-text__char");

      gsap.set(elRef.current, { opacity: 1 });
      gsap.set(chars, { opacity: 0, x: 100, y: 0, filter: "blur(40px)" });

      gsap.to(chars, {
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.8,
        ease: "expo.inOut",
        stagger: 0.02,
        scrollTrigger: {
          trigger: elRef.current,
          start: "top bottom-=100px",
          once: true,
        },
      });
    },
    [text],
    elRef,
  );

  return (
    <span
      className={`animated-text ${center ? "animated-text--center" : ""}`}
      ref={elRef}
    >
      {text}
    </span>
  );
}
