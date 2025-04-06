import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export default function Project({ project, index }) {
  return (
    <div key={index} className="client-modal__project">
      <span className="heading--3 text-dark client-modal__project-title">
        {project.title}
      </span>
      <span className="body client-modal__project-description">
        {project.description}
      </span>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
