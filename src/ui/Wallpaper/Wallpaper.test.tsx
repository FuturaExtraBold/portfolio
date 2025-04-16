import { render, screen } from "@testing-library/react";
import Wallpaper from "./Wallpaper";

describe("Wallpaper Component", () => {
  it("renders the Wallpaper component", () => {
    render(<Wallpaper />);
    const wallpaper = screen.getByTestId("wallpaper");
    expect(wallpaper).toBeInTheDocument();
  });

  it("applies the correct class to the Wallpaper container", () => {
    render(<Wallpaper />);
    const wallpaper = screen.getByTestId("wallpaper");
    expect(wallpaper).toHaveClass("wallpaper");
  });
});
