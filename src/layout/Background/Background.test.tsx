import { render, screen } from "@testing-library/react";
import Background from "./Background";

describe("Background component", () => {
  it("renders children correctly", () => {
    render(
      <Background>
        <div data-testid="child">Child Content</div>
      </Background>
    );
    expect(screen.getByTestId("child")).toHaveTextContent("Child Content");
  });

  it("applies the default class", () => {
    render(<Background>Content</Background>);
    expect(screen.getByTestId("background")).toHaveClass("background");
  });

  it("applies custom class names", () => {
    render(
      <Background className="background custom-class">Content</Background>
    );
    expect(screen.getByTestId("background")).toHaveClass("background");
    expect(screen.getByTestId("background")).toHaveClass("custom-class");
  });
});
