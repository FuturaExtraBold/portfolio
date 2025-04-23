import { render, screen } from "@testing-library/react";
import DreamWorks from "./DreamWorks";

describe("DreamWorks Component", () => {
  it("renders without crashing", () => {
    render(<DreamWorks />);
  });

  it("renders an SVG element", () => {
    render(<DreamWorks />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders a path element with the correct id", () => {
    render(<DreamWorks />);
    const pathElement = screen.getByTestId("dreamworks");
    expect(pathElement).toBeInTheDocument();
  });
});
