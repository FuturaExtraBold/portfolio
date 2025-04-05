import React from "react";
import { useApp } from "AppProvider";
import { caseStudies } from "data/clients";
import "./styles.scss";

export default function Gallery() {
  const { activeCaseStudy } = useApp();
  const caseStudy = caseStudies.find((study) => study.id === activeCaseStudy);
  if (!caseStudy || !caseStudy.gallery) {
    return null;
  }

  return (
    <div className="client-modal__gallery">
      {caseStudy.gallery.map((image, index) => (
        <img
          key={index}
          src={`assets/images/case_studies/${image}`}
          alt={`${caseStudy.title} - ${index + 1}`}
          className="client-modal__gallery-image"
        />
      ))}
    </div>
  );
}
