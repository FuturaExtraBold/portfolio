import { render, screen } from "@testing-library/react";
import Honda from "./Honda";

describe("Honda Component", () => {
  it("renders without crashing", () => {
    render(<Honda />);
  });

  it("renders an SVG element", () => {
    render(<Honda />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders a path element with the correct id", () => {
    render(<Honda />);
    const pathElement = screen.getByTestId("honda");
    expect(pathElement).toBeInTheDocument();
  });
});
