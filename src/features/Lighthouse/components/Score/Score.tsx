import { type JSX, useCallback, useEffect, useRef, useState } from "react";
import { useApp } from "providers/AppProvider";
import { gsap } from "gsap";
import { useFluidProperty } from "hooks/useFluidProperty";
import { useWindowSizeWithBreakpoints } from "hooks/useWindowSizeWithBreakpoints";
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
  const { breakpoints } = useWindowSizeWithBreakpoints();

  const [circumference, setCircumference] = useState(0);

  const circleRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef(null);
  const valueRef = useRef<HTMLDivElement | null>(null);
  const animationRunOnceRef = useRef(false);

  const circleSize = useFluidProperty({
    minWidth: breakpoints.md,
    maxWidth: breakpoints.xl,
    minValue: 50,
    maxValue: 100,
  });
  const strokeWidth = useFluidProperty({
    minWidth: breakpoints.md,
    maxWidth: breakpoints.xl,
    minValue: 4,
    maxValue: 8,
  });
  const radius = circleSize / 2 - strokeWidth / 2;
  const boxShadowSize = useFluidProperty({
    minWidth: breakpoints.md,
    maxWidth: breakpoints.xl,
    minValue: 3,
    maxValue: 8,
  });
  const insetBoxShadow = useFluidProperty({
    minWidth: breakpoints.md,
    maxWidth: breakpoints.xl,
    minValue: 7,
    maxValue: 14,
  });

  const animateCircle = useCallback(() => {
    const circle = circleRef.current;
    if (!circle) return;
    const circumference = circle.getTotalLength();

    gsap.set(circle, {
      strokeDasharray: circumference,
      strokeDashoffset: circumference,
    });

    gsap.to(circle, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power1.inout",
      delay: circleDelay,
      onComplete: () => {
        setCircumference(0);
      },
    });
  }, [circleDelay]);

  const animateValue = useCallback(() => {
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

  useEffect(() => {
    if (circleRef.current) {
      const circle = circleRef.current;
      gsap.set(circle, {
        strokeDasharray: circumference,
        strokeDashoffset: circumference,
      });
    }
  }, [circleRef, circleSize, circumference]);

  return (
    <div
      className="score"
      ref={containerRef}
      style={{
        boxShadow: `0 0 ${boxShadowSize}px ${boxShadowSize}px rgb(0 0 0 / 0.5), inset 0 0 ${boxShadowSize}px ${insetBoxShadow}px rgb(0 0 0 / 0.5)`,
      }}
    >
      <svg className="score__circle" width={circleSize} height={circleSize}>
        <circle
          ref={circleRef}
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          fill="none"
          stroke="white"
          strokeWidth={strokeWidth}
        />
      </svg>
      <div className="score__value" ref={valueRef}>
        0
      </div>
    </div>
  );
}
