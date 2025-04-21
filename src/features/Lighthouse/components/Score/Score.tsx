import { type JSX, useCallback, useEffect, useRef } from "react";
import { useApp } from "providers/AppProvider";
import { gsap } from "gsap";
import "./styles.scss";

interface ScoreProps {
  circleDelay?: number;
  containerDelay?: number;
}

export default function Score({
  circleDelay = 0,
  containerDelay = 0,
}: ScoreProps): JSX.Element {
  const { currentSection } = useApp();

  const circleRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef(null);
  const valueRef = useRef<HTMLDivElement | null>(null);
  const animationRunOnceRef = useRef(false);

  const animateCircle = useCallback(() => {
    const circle = circleRef.current;
    if (!circle) return;
    const circumference = circle.getTotalLength();

    // Set initial stroke-dasharray and stroke-dashoffset
    gsap.set(circle, {
      strokeDasharray: circumference,
      strokeDashoffset: circumference,
    });

    // Animate the stroke-dashoffset to 0
    gsap.to(circle, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power1.inout",
      delay: circleDelay,
    });
  }, [circleDelay]);

  const animateValue = useCallback(() => {
    // Animate the score value from 0 to 100
    gsap.to(
      {},
      {
        duration: 2,
        ease: "power3.out",
        delay: circleDelay,
        onUpdate: function () {
          const progress = Math.round(this.progress() * 100).toString();
          if (!valueRef.current) return;
          valueRef.current.textContent = progress;
        },
      }
    );
  }, [circleDelay]);

  const animateContainer = useCallback(() => {
    // Animate the score container
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
        delay: containerDelay,
      }
    );
  }, [containerDelay]);

  useEffect(() => {
    gsap.set(containerRef.current, {
      opacity: 0,
      y: 100,
    });
  }, []);

  useEffect(() => {
    if (currentSection === "lighthouse") {
      if (!animationRunOnceRef.current) {
        animationRunOnceRef.current = true;
        animateCircle();
        animateValue();
        animateContainer();
      }
    }
  }, [
    animateCircle,
    animateContainer,
    animateValue,
    circleDelay,
    containerDelay,
    currentSection,
  ]);

  return (
    <div className="score" ref={containerRef}>
      <svg className="score__circle" width="120" height="120">
        <circle
          ref={circleRef}
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="white"
          strokeWidth="8"
        />
      </svg>
      <div className="score__value" ref={valueRef}>
        0
      </div>
    </div>
  );
}
