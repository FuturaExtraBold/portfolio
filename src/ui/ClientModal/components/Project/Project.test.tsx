import { render, screen } from "@testing-library/react";
import Project from "./Project";

describe("Project Component", () => {
  it("renders the project title correctly", () => {
    const project = { title: "Test Project" };
    const index = 0;
    render(<Project project={project} index={index} />);
    const titleElement = screen.getByText(project.title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass(
      "heading--3 text-dark client-modal__project-title"
    );
  });

  it("applies the correct key to the project container", () => {
    const project = { title: "Another Project" };
    const index = 1;
    render(<Project project={project} index={index} />);
    const projectContainer = screen.queryByTestId("client-modal-project");
    expect(projectContainer).toBeInTheDocument();
    expect(projectContainer).toHaveClass("client-modal__project");
  });
});
