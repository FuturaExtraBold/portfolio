import React from "react";
import classnames from "classnames";
import { useApp } from "providers/AppProvider";
import { caseStudies } from "data/clients";
import "./styles.scss";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Project from "./components/Project/Project";
import { Fragment } from "react/jsx-runtime";

export default function ClientModal() {
  const { activeCaseStudy, isModalActive, setIsModalActive } = useApp();

  const modalClasses = classnames("client-modal", {
    "client-modal--active": isModalActive,
  });

  const caseStudy = caseStudies.find((study) => study.id === activeCaseStudy);

  const preventEvents = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={modalClasses}>
      <div
        className="client-modal__overlay"
        onClick={(e) => {
          preventEvents(e);
          setIsModalActive(false);
        }}
        onWheel={(e) => preventEvents(e)}
        onTouchStart={(e) => preventEvents(e)}
        onMouseMove={(e) => preventEvents(e)}
      />
      <div
        className="client-modal__content"
        onClick={(e) => preventEvents(e)}
        onWheel={(e) => preventEvents(e)}
        onTouchStart={(e) => preventEvents(e)}
        onMouseMove={(e) => preventEvents(e)}
      >
        {caseStudy && (
          <>
            <div
              className="client-modal__close"
              onClick={() => setIsModalActive(false)}
            >
              <span className="client-modal__close-icon">X</span>
            </div>
            <Header title={caseStudy.title} client={caseStudy.client} />
            <hr className="client-modal__divider" />
            {caseStudy.projects.map((project, index) => (
              <Fragment key={index}>
                <Project project={project} index={index} />
                <Gallery gallery={project.gallery} title={project.title} />
              </Fragment>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
