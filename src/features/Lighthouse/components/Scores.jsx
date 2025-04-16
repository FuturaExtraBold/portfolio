import React, { useCallback, useEffect, useRef } from "react";
import { useApp } from "providers/AppProvider";
import { gsap } from "gsap";
import "./styles.scss";

function Score({ circleDelay = 0, containerDelay = 0 }) {
  const { currentSection } = useApp();

  const circleRef = useRef(null);
  const containerRef = useRef(null);
  const valueRef = useRef(null);
  const animationRunOnceRef = useRef(false);

  const animateCircle = useCallback(() => {
    const circle = circleRef.current;
    const circumference = circle.getTotalLength();

    // Set initial stroke-dasharray and stroke-dashoffset
    gsap.set(circle, {
      strokeDasharray: circumference,
      strokeDashoffset: circumference,
    });

    // Animate the stroke-dashoffset to 0
    gsap.to(circle, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power1.inout",
      delay: circleDelay,
    });
  }, [circleDelay]);

  const animateValue = useCallback(() => {
    // Animate the score value from 0 to 100
    gsap.to(
      {},
      {
        duration: 3,
        ease: "power3.out",
        delay: circleDelay,
        onUpdate: function () {
          const progress = Math.round(this.progress() * 100);
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

export default function Scores() {
  return (
    <div className="scores">
      <div className="scores__section">
        <Score circleDelay={0} containerDelay={0} />
        <Score circleDelay={0.3} containerDelay={0.2} />
      </div>
      <div className="scores__section">
        <Score circleDelay={0.5} containerDelay={0.4} />
        <Score circleDelay={0.7} containerDelay={0.6} />
      </div>
    </div>
  );
}
