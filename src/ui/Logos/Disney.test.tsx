import { render, screen } from "@testing-library/react";
import Disney from "./Disney";

describe("Disney Component", () => {
  it("renders without crashing", () => {
    render(<Disney />);
  });

  it("renders an SVG element", () => {
    render(<Disney />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders a path element with the correct id", () => {
    render(<Disney />);
    const pathElement = screen.getByTestId("disney");
    expect(pathElement).toBeInTheDocument();
  });
});
