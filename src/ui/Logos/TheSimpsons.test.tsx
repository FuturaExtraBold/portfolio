import { render, screen } from "@testing-library/react";
import TheSimpsons from "./TheSimpsons";

describe("TheSimpsons Component", () => {
  it("renders without crashing", () => {
    render(<TheSimpsons />);
  });

  it("renders an SVG element", () => {
    render(<TheSimpsons />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders a path element with the correct id", () => {
    render(<TheSimpsons />);
    const pathElement = screen.getByTestId("simpsons");
    expect(pathElement).toBeInTheDocument();
  });
});
