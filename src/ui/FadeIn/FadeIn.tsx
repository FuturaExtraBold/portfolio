import { type JSX, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useScrollTrigger } from "hooks/useScrollTrigger";
import "./styles.scss";

interface FadeInProps {
  children: JSX.Element | JSX.Element[];
}

export default function FadeIn({ children }: FadeInProps): JSX.Element {
  const elRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  function simpleAnimation() {
    if (!elRef.current || hasAnimated) return;
    gsap.set(elRef.current, { opacity: 0, filter: "blur(10px)", y: 20 });
    gsap.to(elRef.current, {
      filter: "blur(0px)",
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "expo.inOut",
    });
  }

  useScrollTrigger({
    element: elRef.current,
    callback: () => {
      setHasAnimated(true);
      simpleAnimation();
    },
  });

  return (
    <div className="fade-in" ref={elRef}>
      {children}
    </div>
  );
}
