import { type JSX, useCallback, useRef } from "react";
import { useApp } from "providers/AppProvider";
import { caseStudies } from "data/clients";
import { useFluidProperty } from "hooks/useFluidProperty";
import "./styles.scss";

export default function ClientQuilt(): JSX.Element {
  const { breakpoints, setActiveCaseStudy, setIsModalActive } = useApp();

  const quiltRef = useRef<HTMLDivElement | null>(null);

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

  const numPerRow = window.outerWidth >= breakpoints.md ? 5 : 3;
  const tempRows = [];
  for (let i = 0; i < caseStudies.length; i += numPerRow) {
    tempRows.push(caseStudies.slice(i, i + numPerRow));
  }

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

  const resolvedBaseRadius = useFluidProperty({
    minWidth: breakpoints.xs,
    maxWidth: breakpoints.lg,
    minValue: values.minValue,
    maxValue: values.maxValue,
  });

  const resolvedScale = useFluidProperty({
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

  return (
    <div className="client-quilt" ref={quiltRef}>
      {renderedRows}
    </div>
  );
}
