import { render, screen } from "@testing-library/react";
import KSwiss from "./KSwiss";

describe("KSwiss Component", () => {
  it("renders without crashing", () => {
    render(<KSwiss />);
  });

  it("renders an SVG element", () => {
    render(<KSwiss />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders a path element with the correct id", () => {
    render(<KSwiss />);
    const pathElement = screen.getByTestId("kswiss");
    expect(pathElement).toBeInTheDocument();
  });
});
