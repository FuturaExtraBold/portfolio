import { type JSX, useCallback, useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
import { useApp } from "providers/AppProvider";
import { caseStudies } from "data/clients";
import { fluidProperty } from "utils/layout";
import "./styles.scss";

export default function ClientQuilt(): JSX.Element {
  const { breakpoints, mediaClass, setActiveCaseStudy, setIsModalActive } =
    useApp();

  const quiltRef = useRef<HTMLDivElement | null>(null);

  // const [animationHasRun, setAnimationHasRun] = useState(false);

  // const setRowStyles = useCallback(
  //   (params: {
  //     countPerRow: number;
  //     radius: number;
  //     startingIndex: number;
  //     spacingOffset: number;
  //   }) => {
  //     const { countPerRow, radius, startingIndex, spacingOffset } = params;

  //     if (!quiltRef.current) return;
  //     const clientElements = quiltRef.current.children;
  //     const arcAngle = Math.PI / 8;
  //     const angleStep = arcAngle / (countPerRow - 1);

  //     for (
  //       let i = startingIndex;
  //       i < Math.min(startingIndex + countPerRow, caseStudies.length);
  //       i++
  //     ) {
  //       const angle = -arcAngle + (i - startingIndex) * angleStep * 2;
  //       const x = radius * Math.sin(angle) * 2;
  //       const y = radius * (1 - Math.cos(angle)) * 2 - spacingOffset;
  //       (
  //         clientElements[i] as HTMLElement
  //       ).style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad) scale(0.8)`;
  //     }

  //     if (!animationHasRun)
  //       gsap.fromTo(
  //         clientElements,
  //         { opacity: 0 },
  //         {
  //           opacity: 1,
  //           ease: "power2.in",
  //           stagger: 0.05,
  //           duration: 0.2,
  //           onComplete: () => setAnimationHasRun(true),
  //         }
  //       );
  //   },
  //   [animationHasRun]
  // );

  // useEffect(() => {
  //   const rows = [];
  //   const numPerRow = 5;
  //   for (let i = 0; i < caseStudies.length; i += numPerRow) {
  //     rows.push(caseStudies.slice(i, i + numPerRow));
  //   }

  //   const numRows = width >= breakpoints.md ? 3 : 2;
  //   const countPerRow = Math.ceil(caseStudies.length / numRows);
  //   const values =
  //     numRows === 2
  //       ? {
  //           minValue: 240,
  //           maxValue: 540,
  //           verticalSpaceMultiplier: 120,
  //           verticalCenter: 120,
  //         }
  //       : {
  //           minValue: 160,
  //           maxValue: 400,
  //           verticalSpaceMultiplier: 70,
  //           verticalCenter: 140,
  //         };

  //   const resolvedBaseRadius = fluidProperty({
  //     minWidth: breakpoints.xs,
  //     maxWidth: breakpoints.lg,
  //     minValue: values.minValue,
  //     maxValue: values.maxValue,
  //   });

  //   for (let i = 0; i < numRows; i++) {
  //     setRowStyles({
  //       countPerRow,
  //       radius: resolvedBaseRadius,
  //       startingIndex: i * countPerRow,
  //       spacingOffset:
  //         values.verticalCenter - i * values.verticalSpaceMultiplier,
  //     });
  //   }
  // }, [breakpoints, setRowStyles, width]);

  const handleLogoClick = useCallback(
    (id: string): void => {
      console.log("Logo clicked:", id);
      const selectedCaseStudy = caseStudies.find((study) => study.id === id);
      if (selectedCaseStudy && selectedCaseStudy.projects) {
        setActiveCaseStudy(id);
        setIsModalActive(true);
      } else {
        console.error(`Case study with id "${id}" not found.`);
      }
    },
    [setActiveCaseStudy, setIsModalActive]
  );

  const [rows, setRows] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const tempRows = [];
    const numPerRow = window.outerWidth >= breakpoints.md ? 5 : 3;
    for (let i = 0; i < caseStudies.length; i += numPerRow) {
      tempRows.push(caseStudies.slice(i, i + numPerRow));
    }
    console.log("rows:", tempRows);

    const values =
      tempRows.length === 2
        ? {
            minValue: 250,
            maxValue: 500,
          }
        : {
            minValue: 120,
            maxValue: 120,
          };

    const resolvedBaseRadius = fluidProperty({
      minWidth: breakpoints.xs,
      maxWidth: breakpoints.lg,
      minValue: values.minValue,
      maxValue: values.maxValue,
    });

    const resolvedScale = fluidProperty({
      minWidth: breakpoints.xs,
      maxWidth: breakpoints.lg,
      minValue: 0.8,
      maxValue: 1,
    });

    const renderedRows = tempRows.map((row, rowIndex) => (
      <div key={rowIndex} className="client-quilt__row">
        {row.map((client, index) => {
          const arcAngle = Math.PI / 8;
          const angleStep = arcAngle / (row.length - 1);
          const angle = -arcAngle + index * angleStep * 2;
          const y = resolvedBaseRadius * (1 - Math.cos(angle)) * 2;

          return (
            <div
              key={client.id}
              className="client"
              onClick={handleLogoClick.bind(null, client.id)}
              style={{
                transform: `translateY(${y}px) rotate(${angle}rad) scale(${resolvedScale})`,
              }}
            >
              {client.logoComponent()}
            </div>
          );
        })}
      </div>
    ));

    setRows(renderedRows);
  }, [breakpoints, handleLogoClick, mediaClass]);

  return (
    <div className="client-quilt" ref={quiltRef}>
      {rows}
    </div>
  );
}
