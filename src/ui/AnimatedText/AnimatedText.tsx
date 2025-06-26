import { type JSX, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useScrollTrigger } from "hooks/useScrollTrigger";
import "./styles.scss";

interface AnimatedTextProps {
  center?: boolean;
  text?: string;
}

export default function AnimatedText({
  center = false,
  text,
}: AnimatedTextProps): JSX.Element {
  const elRef = useRef<HTMLSpanElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  function wordsAnimation() {
    if (!elRef.current || hasAnimated) return;
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

    elRef.current.innerHTML = resolvedText;
    const chars = elRef.current.querySelectorAll(".animated-text__char");

    chars.forEach((char, index) => {
      const ctx = gsap.context(() => {
        gsap.set(elRef.current, { opacity: 1 });
        gsap.set(char, { opacity: 0, x: 100, y: 0, filter: "blur(40px)" });
        gsap.to(char, {
          filter: "blur(0px)",
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: "expo.inOut",
          delay: index * 0.02,
        });
      }, char);
      return () => ctx.revert();
    });
  }

  useScrollTrigger({
    element: elRef.current,
    callback: () => {
      setHasAnimated(true);
      wordsAnimation();
    },
  });

  return (
    <span
      className={`animated-text ${center ? "animated-text--center" : ""}`}
      ref={elRef}
    >
      {text}
    </span>
  );
}
