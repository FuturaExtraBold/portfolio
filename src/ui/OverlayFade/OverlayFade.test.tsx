import { render, screen } from "@testing-library/react";
import OverlayFade from "./OverlayFade";

describe("OverlayFade Component", () => {
  it("renders the OverlayFade component", () => {
    render(<OverlayFade />);
    const overlay = screen.getByTestId("overlay-fade");
    expect(overlay).toBeInTheDocument();
  });

  it("applies the default opacity when no prop is provided", () => {
    render(<OverlayFade />);
    const overlay = screen.getByTestId("overlay-fade");
    expect(overlay).toHaveStyle({ opacity: "0.2" });
  });

  it("applies the correct opacity when the prop is provided", () => {
    render(<OverlayFade opacity={0.5} />);
    const overlay = screen.getByTestId("overlay-fade");
    expect(overlay).toHaveStyle({ opacity: "0.5" });
  });
});
