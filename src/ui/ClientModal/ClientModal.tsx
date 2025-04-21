import { MouseEvent, WheelEvent, TouchEvent, type JSX } from "react";
import classnames from "classnames";
import { Fragment } from "react/jsx-runtime";
import { useApp } from "providers/AppProvider";
import { caseStudies } from "data/clients";
import { Gallery, Header, Project } from "./components";
import "./styles.scss";

interface CaseStudy {
  id: string;
  title?: string;
  client?: string;
  projects?: {
    title: string;
    gallery: string[];
  }[];
}

export default function ClientModal(): JSX.Element {
  const { activeCaseStudy, isModalActive, setIsModalActive } = useApp();

  const modalClasses = classnames("client-modal", {
    "client-modal--active": isModalActive,
  });

  const caseStudy: CaseStudy | undefined = caseStudies.find(
    (study) => study.id === activeCaseStudy
  );

  const preventEvents = (e: MouseEvent | WheelEvent | TouchEvent): void => {
    e.stopPropagation();
  };

  return (
    <div className={modalClasses} role="dialog">
      <div
        className="client-modal__overlay"
        data-testid="client-modal-overlay"
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
        data-testid="client-modal-content"
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
            <Header
              title={caseStudy.title ?? ""}
              client={caseStudy.client}
              description="Lorem ipsum dolor sit amet"
            />
            <hr className="client-modal__divider" />
            {caseStudy.projects?.map((project, index) => (
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
