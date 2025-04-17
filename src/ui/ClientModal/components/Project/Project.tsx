import React, { type JSX } from "react";
import "./styles.scss";

interface ProjectProps {
  project: {
    title: string;
    description: string;
  };
  index: number;
}

const Project = ({ project, index }: ProjectProps): JSX.Element => {
  return (
    <div key={index} className="client-modal__project">
      <span className="heading--3 text-dark client-modal__project-title">
        {project.title}
      </span>
      {/* <span className="body client-modal__project-description">
        {project.description}
      </span> */}
    </div>
  );
};

export default Project;
