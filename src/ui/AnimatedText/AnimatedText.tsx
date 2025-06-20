import { type JSX, useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles.scss";

interface AnimatedTextProps {
  text?: string;
  flex?: boolean;
  simple?: boolean;
}

export default function AnimatedText({
  simple,
  flex = true,
  text,
}: AnimatedTextProps): JSX.Element {
  const elRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    if (simple) {
      gsap.set(el, { opacity: 0 });
      gsap.to(el, {
        opacity: 1,
        duration: 0.8,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });
      return;
    }

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
          ease: "expo.inOut",
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
    <span
      className={`animated-text ${flex ? "animated-text--flex" : ""}`}
      ref={elRef}
    >
      {text}
    </span>
  );
}
