import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  it("renders the title correctly", () => {
    const title = "Test Title";
    render(<Header title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("heading--2 client-modal__title");
  });
});
