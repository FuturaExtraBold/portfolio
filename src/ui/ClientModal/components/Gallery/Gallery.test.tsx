import { render, screen } from "@testing-library/react";
import Gallery from "./Gallery";

describe("Gallery Component", () => {
  it("renders null when gallery is empty", () => {
    render(<Gallery gallery={[]} title="Test Gallery" />);
    expect(screen.queryByTestId("client-modal-gallery")).toBeNull();
  });

  it("renders null when gallery is not provided", () => {
    render(<Gallery gallery={undefined} title="Test Gallery" />);
    expect(screen.queryByTestId("client-modal-gallery")).toBeNull();
  });

  it("renders images correctly when gallery is provided", () => {
    const gallery = ["image1.jpg", "image2.jpg"];
    render(<Gallery gallery={gallery} title="Test Gallery" />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(gallery.length);

    images.forEach((img, index) => {
      expect(img).toHaveAttribute(
        "src",
        `/assets/images/case_studies/${gallery[index]}`
      );
      expect(img).toHaveAttribute("alt", `Test Gallery - ${index + 1}`);
      expect(img).toHaveClass("client-modal__gallery-image");
    });
  });
});
