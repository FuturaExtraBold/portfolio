import { render, screen } from "@testing-library/react";
import SouthPark from "./SouthPark";

describe("SouthPark Component", () => {
  it("renders without crashing", () => {
    render(<SouthPark />);
  });

  it("renders an SVG element", () => {
    render(<SouthPark />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders a path element with the correct id", () => {
    render(<SouthPark />);
    const pathElement = screen.getByTestId("southpark");
    expect(pathElement).toBeInTheDocument();
  });
});
