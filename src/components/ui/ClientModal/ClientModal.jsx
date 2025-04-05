import React from "react";
import classNames from "classnames";
import { useApp } from "AppProvider";
import { caseStudies } from "data/clients";
import "./styles.scss";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";

export default function ClientModal() {
  const { activeCaseStudy, isModalActive, setIsModalActive } = useApp();

  const modalClasses = classNames("client-modal", {
    "client-modal--active": isModalActive,
  });

  const caseStudy = caseStudies.find((study) => study.id === activeCaseStudy);

  return (
    <div className={modalClasses}>
      <div
        className="client-modal__overlay"
        onClick={() => setIsModalActive(false)}
      />
      <div
        className="client-modal__close"
        onClick={() => setIsModalActive(false)}
      >
        <span className="client-modal__close-icon">X</span>
      </div>
      <div className="client-modal__content">
        {caseStudy && (
          <>
            <Header
              title={caseStudy.title}
              client={caseStudy.client}
              description={caseStudy.description}
            />
            <Gallery />
          </>
        )}
      </div>
    </div>
  );
}
