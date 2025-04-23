import { render, screen } from "@testing-library/react";
import Sony from "./Sony";

describe("Sony Component", () => {
  it("renders without crashing", () => {
    render(<Sony />);
  });

  it("renders an SVG element", () => {
    render(<Sony />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders a path element with the correct id", () => {
    render(<Sony />);
    const pathElement = screen.getByTestId("sony");
    expect(pathElement).toBeInTheDocument();
  });
});
