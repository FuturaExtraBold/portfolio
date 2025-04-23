import { render, screen } from "@testing-library/react";
import Lexus from "./Lexus";

describe("Lexus Component", () => {
  it("renders without crashing", () => {
    render(<Lexus />);
  });

  it("renders an SVG element", () => {
    render(<Lexus />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders a path element with the correct id", () => {
    render(<Lexus />);
    const pathElement = screen.getByTestId("lexus");
    expect(pathElement).toBeInTheDocument();
  });
});
