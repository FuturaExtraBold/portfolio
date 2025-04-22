import { render, screen } from "@testing-library/react";
import About from "./About";
import { useApp } from "providers/AppProvider";
import { animateFloat } from "utils/animation";

jest.mock("AppProvider", () => ({
  useApp: jest.fn(),
}));

jest.mock("utils/animation", () => ({
  animateFloat: jest.fn(),
}));

describe("About Component", () => {
  beforeEach(() => {
    (useApp as jest.Mock).mockReturnValue({
      breakpoints: {
        md: 768,
        xl: 1440,
      },
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
      screen.getByText(
        /I am a Frontend Developer with a penchant for creating pixel-perfect and responsive web experiences/i
      )
    ).toBeInTheDocument();
  });

  it("renders the Wallpaper and OverlayFade components", () => {
    render(<About />);
    expect(screen.getByTestId("wallpaper")).toBeInTheDocument();
    expect(screen.getByTestId("overlay-fade")).toBeInTheDocument();
  });
});
