import { type JSX } from "react";
import "./styles.scss";

interface ProjectProps {
  project: {
    title: string;
  };
  index: number;
}

const Project = ({ project, index }: ProjectProps): JSX.Element => {
  return (
    <div
      key={index}
      className="client-modal__project"
      data-testid="client-modal-project"
    >
      <span className="heading--3 text-dark client-modal__project-title">
        {project.title}
      </span>
    </div>
  );
};

export default Project;
