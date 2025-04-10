import React from "react";
import { render, screen } from "@testing-library/react";
import Separator from "./Separator";

// Mock the image import
jest.mock("./separator.png", () => "mock-separator.png");

describe("Separator Component", () => {
  it("renders the Separator component", () => {
    render(<Separator />);
    expect(screen.getByRole("img", { name: /separator/i })).toBeInTheDocument();
  });

  it("applies the correct class to the container", () => {
    render(<Separator />);
    const container = screen.getByTestId("separator-container");
    expect(container).toHaveClass("separator");
  });

  it("renders the image with the correct src and alt attributes", () => {
    render(<Separator />);
    const image = screen.getByRole("img", { name: /separator/i });
    expect(image).toHaveAttribute("src", "mock-separator.png");
    expect(image).toHaveAttribute("alt", "Separator");
  });
});
