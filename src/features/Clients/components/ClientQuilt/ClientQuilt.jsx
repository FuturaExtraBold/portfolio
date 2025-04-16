import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useApp } from "providers/AppProvider";
import { caseStudies } from "data/clients";
import { fluidProperty } from "utils/layout";
import Client from "../Client";
import "./styles.scss";

export default function ClientQuilt() {
  const { breakpoints, setActiveCaseStudy, setIsModalActive, windowSize } =
    useApp();
  const { width } = windowSize;

  const quiltRef = useRef(null);

  const [animationHasRun, setAnimationHasRun] = useState(false);

  const setRowStyles = useCallback(
    ({ countPerRow, radius, startingIndex, spacingOffset }) => {
      const clientElements = quiltRef.current.children;
      const arcAngle = Math.PI / 8;
      const angleStep = arcAngle / (countPerRow - 1);

      for (
        let i = startingIndex;
        i < Math.min(startingIndex + countPerRow, caseStudies.length);
        i++
      ) {
        const angle = -arcAngle + (i - startingIndex) * angleStep * 2;
        const x = radius * Math.sin(angle) * 2;
        const y = radius * (1 - Math.cos(angle)) * 2 - spacingOffset;
        clientElements[
          i
        ].style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad) scale(0.8)`;
      }

      if (!animationHasRun)
        gsap.fromTo(
          clientElements,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "power2.in",
            stagger: 0.05,
            duration: 0.2,
            onComplete: () => setAnimationHasRun(true),
          }
        );
    },
    [animationHasRun]
  );

  useEffect(() => {
    const numRows = width >= breakpoints.md ? 3 : 5;
    const countPerRow = Math.ceil(caseStudies.length / numRows);
    const values =
      numRows === 3
        ? {
            minValue: 240,
            maxValue: 540,
            verticalSpaceMultiplier: 120,
            verticalCenter: 120,
          }
        : {
            minValue: 160,
            maxValue: 400,
            verticalSpaceMultiplier: 70,
            verticalCenter: 140,
          };

    const resolvedBaseRadius = fluidProperty({
      minWidth: breakpoints.xs,
      maxWidth: breakpoints.lg,
      minValue: values.minValue,
      maxValue: values.maxValue,
    });

    for (let i = 0; i < numRows; i++) {
      setRowStyles({
        countPerRow,
        radius: resolvedBaseRadius,
        startingIndex: i * countPerRow,
        spacingOffset:
          values.verticalCenter - i * values.verticalSpaceMultiplier,
      });
    }
  }, [breakpoints, setRowStyles, width]);

  const handleLogoClick = (id) => {
    console.log("Logo clicked:", id);
    const selectedCaseStudy = caseStudies.find((study) => study.id === id);
    if (selectedCaseStudy && selectedCaseStudy.projects) {
      setActiveCaseStudy(id);
      setIsModalActive(true);
    } else {
      console.error(`Case study with id "${id}" not found.`);
    }
  };

  return (
    <div className="client-quilt" ref={quiltRef}>
      {caseStudies.map(({ logoComponent: LogoComponent, id, title }) => (
        <Client
          key={id}
          LogoComponent={LogoComponent}
          title={title}
          onClick={() => handleLogoClick(id)}
        />
      ))}
    </div>
  );
}
