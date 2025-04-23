import { render, screen } from "@testing-library/react";
import Kajabi from "./Kajabi";

describe("Kajabi Component", () => {
  it("renders without crashing", () => {
    render(<Kajabi />);
  });

  it("renders an SVG element", () => {
    render(<Kajabi />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders a path element with the correct id", () => {
    render(<Kajabi />);
    const pathElement = screen.getByTestId("kajabi");
    expect(pathElement).toBeInTheDocument();
  });
});
