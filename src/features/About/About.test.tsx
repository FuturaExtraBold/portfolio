import { render, screen } from "@testing-library/react";
import About from "./About";
import { useAppLoad, useViewport } from "providers/AppProvider";
import { animateFloat } from "utils/animation";

jest.mock("providers/AppProvider", () => ({
  useAppLoad: jest.fn(),
  useViewport: jest.fn(),
}));

jest.mock("utils/animation", () => ({
  animateFloat: jest.fn(),
}));

describe("About Component", () => {
  beforeEach(() => {
    (useAppLoad as jest.Mock).mockReturnValue({ appIsLoaded: true });
    (useViewport as jest.Mock).mockReturnValue({
      assetSize: "desktop",
      breakpoints: { md: 768, xl: 1440 },
    });
  });

  it("renders the About section", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", {
        name: /marvel at feats of spectacular ingenuity/i,
      })
    ).toBeInTheDocument();
  });

  it("renders the ship image", () => {
    render(<About />);
    const shipImage = screen.getByAltText("Ship");
    expect(shipImage).toBeInTheDocument();
    expect(shipImage).toHaveClass("about__image");
  });

  it("calls animateFloat on mount", () => {
    render(<About />);
    expect(animateFloat).toHaveBeenCalled();
  });

  it("renders the description text", () => {
    render(<About />);
    expect(
      screen.getByText(/a seasoned practitioner of the digital arts/i)
    ).toBeInTheDocument();
  });

  it("renders the Wallpaper and OverlayFade components", () => {
    render(<About />);
    expect(screen.getByTestId("wallpaper")).toBeInTheDocument();
    expect(screen.getByTestId("overlay-fade")).toBeInTheDocument();
  });
});
