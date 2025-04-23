import { render, screen } from "@testing-library/react";
import FOX from "./FOX";

describe("FOX Component", () => {
  it("renders without crashing", () => {
    render(<FOX />);
  });

  it("renders an SVG element", () => {
    render(<FOX />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders a path element with the correct id", () => {
    render(<FOX />);
    const pathElement = screen.getByTestId("fox");
    expect(pathElement).toBeInTheDocument();
  });
});
