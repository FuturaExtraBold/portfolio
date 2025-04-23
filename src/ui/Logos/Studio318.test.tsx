import { render, screen } from "@testing-library/react";
import Studio318 from "./Studio318";

describe("Studio318 Component", () => {
  it("renders without crashing", () => {
    render(<Studio318 />);
  });

  it("renders an SVG element", () => {
    render(<Studio318 />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders a path element with the correct id", () => {
    render(<Studio318 />);
    const pathElement = screen.getByTestId("studio318");
    expect(pathElement).toBeInTheDocument();
  });
});
