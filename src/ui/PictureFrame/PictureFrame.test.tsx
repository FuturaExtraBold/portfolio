import { render, screen } from "@testing-library/react";
import PictureFrame from "./PictureFrame";

describe("PictureFrame Component", () => {
  it("renders the PictureFrame component", () => {
    render(<PictureFrame />);
    const pictureFrame = screen.getByTestId("picture-frame");
    expect(pictureFrame).toBeInTheDocument();
  });

  it("applies the correct class to the PictureFrame container", () => {
    render(<PictureFrame />);
    const pictureFrame = screen.getByTestId("picture-frame");
    expect(pictureFrame).toHaveClass("picture-frame");
  });
});
