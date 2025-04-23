import { render, screen } from "@testing-library/react";
import Pixar from "./Pixar";

describe("Pixar Component", () => {
  it("renders without crashing", () => {
    render(<Pixar />);
  });

  it("renders an SVG element", () => {
    render(<Pixar />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders a path element with the correct id", () => {
    render(<Pixar />);
    const pathElement = screen.getByTestId("pixar");
    expect(pathElement).toBeInTheDocument();
  });
});
