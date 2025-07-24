import { type JSX, useEffect, useRef } from "react";
import gsap from "gsap";
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

  useEffect(() => {
    if (!elRef.current) return;

    const ctx = gsap.context(() => {
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
    }, elRef);

    return () => ctx.revert();
  }, [text]);

  return (
    <span
      className={`animated-text ${center ? "animated-text--center" : ""}`}
      ref={elRef}
    >
      {text}
    </span>
  );
}
