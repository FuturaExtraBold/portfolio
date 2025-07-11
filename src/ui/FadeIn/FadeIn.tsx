import { type JSX, useEffect, useRef } from "react";
import gsap from "gsap";

interface FadeInProps {
  children: JSX.Element | JSX.Element[];
}

export default function FadeIn({ children }: FadeInProps): JSX.Element {
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(elRef.current, { opacity: 0, filter: "blur(10px)", y: 20 });
      gsap.to(elRef.current, {
        filter: "blur(0px)",
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: elRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, elRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="fade-in" ref={elRef}>
      {children}
    </div>
  );
}
