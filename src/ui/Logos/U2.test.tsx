import { render, screen } from "@testing-library/react";
import U2 from "./U2";

describe("U2 Component", () => {
  it("renders without crashing", () => {
    render(<U2 />);
  });

  it("renders an SVG element", () => {
    render(<U2 />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders a path element with the correct id", () => {
    render(<U2 />);
    const pathElement = screen.getByTestId("u2");
    expect(pathElement).toBeInTheDocument();
  });
});
