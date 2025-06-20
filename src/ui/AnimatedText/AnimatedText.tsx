import { type JSX, useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles.scss";

interface AnimatedTextProps {
  text?: string;
}

export default function AnimatedText({ text }: AnimatedTextProps): JSX.Element {
  const elRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let resolvedText = text || "";
    if (text) {
      // Split the text into words
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
    console.log("Resolved Text:", resolvedText);

    el.innerHTML = resolvedText;
    const chars = el.querySelectorAll(".animated-text__char");

    chars.forEach((char, index) => {
      const ctx = gsap.context(() => {
        gsap.set(el, { opacity: 1 });
        gsap.set(char, { opacity: 0, y: 5 });
        gsap.to(char, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "expo.inOut(10)",
          delay: index * 0.015,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        });
      }, char);
      return () => ctx.revert();
    });
  }, []);

  return (
    <span className="animated-text" ref={elRef}>
      {text}
    </span>
  );
}
