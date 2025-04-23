import { render, screen } from "@testing-library/react";
import KIA from "./KIA";

describe("KIA Component", () => {
  it("renders without crashing", () => {
    render(<KIA />);
  });

  it("renders an SVG element", () => {
    render(<KIA />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders a path element with the correct id", () => {
    render(<KIA />);
    const pathElement = screen.getByTestId("kia");
    expect(pathElement).toBeInTheDocument();
  });
});
