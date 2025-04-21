import { render, screen } from "@testing-library/react";
import Content from "./Content";

describe("Content component", () => {
  it("renders children correctly", () => {
    render(
      <Content>
        <div data-testid="child">Child Content</div>
      </Content>
    );
    expect(screen.getByTestId("child")).toHaveTextContent("Child Content");
  });

  it("applies the default class", () => {
    render(<Content>Content</Content>);
    expect(screen.getByTestId("content")).toHaveClass("content");
  });

  it("applies custom class names", () => {
    render(<Content className="content custom-class">Content</Content>);
    expect(screen.getByTestId("content")).toHaveClass("content");
    expect(screen.getByTestId("content")).toHaveClass("custom-class");
  });
});
