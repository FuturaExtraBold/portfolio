import { type JSX, useCallback, useRef } from "react";
import { Container } from "layout";
import { useApp } from "providers/AppProvider";
import { caseStudies } from "data/clients";
import "./styles.scss";

export default function ClientQuilt(): JSX.Element {
  const { setActiveCaseStudy, setIsModalActive } = useApp();

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

  const renderedRows = caseStudies.map((client, index) => {
    return (
      <div
        key={client.id}
        className="client"
        onClick={() => handleLogoClick(client.id)}
      >
        {client.logoComponent()}
      </div>
    );
  });

  return (
    <div className="client-quilt" ref={quiltRef}>
      <Container className="client-quilt__container">{renderedRows}</Container>
    </div>
  );
}
