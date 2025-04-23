import { render, screen } from "@testing-library/react";
import HookyGrand from "./HookyGrand";

describe("HookyGrand Component", () => {
  it("renders without crashing", () => {
    render(<HookyGrand />);
  });

  it("renders an SVG element", () => {
    render(<HookyGrand />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders a path element with the correct id", () => {
    render(<HookyGrand />);
    const pathElement = screen.getByTestId("hooky");
    expect(pathElement).toBeInTheDocument();
  });
});
