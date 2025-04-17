declare module "ui/ClientModal/components/Project/Project" {
  import { FC } from "react";

  interface Project {
    title: string;
    description: string;
  }

  interface ProjectProps {
    project: Project;
    index: number;
  }

  const Project: FC<ProjectProps>;
  export default Project;
}
