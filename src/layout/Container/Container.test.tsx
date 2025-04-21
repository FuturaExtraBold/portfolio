import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("Container component", () => {
  it("renders children correctly", () => {
    render(
      <Container>
        <div data-testid="child">Child Content</div>
      </Container>
    );
    expect(screen.getByTestId("child")).toHaveTextContent("Child Content");
  });

  it("applies the default class", () => {
    render(<Container>Content</Container>);
    expect(screen.getByTestId("container")).toHaveClass("container");
  });

  it("applies custom class names", () => {
    render(<Container className="container custom-class">Content</Container>);
    expect(screen.getByTestId("container")).toHaveClass("container");
    expect(screen.getByTestId("container")).toHaveClass("custom-class");
  });
});
