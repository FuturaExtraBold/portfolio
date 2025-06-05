import { render, screen } from "@testing-library/react";
import Vignette from "./Vignette";
import { useApp } from "providers/AppProvider";

jest.mock("AppProvider", () => ({
  useApp: jest.fn(),
}));

describe("Vignette Component", () => {
  beforeEach(() => {
    (useApp as jest.Mock).mockReturnValue({
      breakpoints: { md: 768, lg: 1024 },
    });
  });

  it("renders the Vignette component", () => {
    render(<Vignette />);
    const vignette = screen.getByRole("presentation", { hidden: true });
    expect(vignette).toBeInTheDocument();
  });

  it("applies the correct opacity style", () => {
    render(<Vignette />);
    const vignette = screen.getByRole("presentation", { hidden: true });
    expect(vignette).toHaveStyle({ opacity: "0.5" });
  });
});
