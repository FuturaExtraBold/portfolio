import { render, screen } from "@testing-library/react";
import Section from "./Section";

describe("Section component", () => {
  it("renders children correctly", () => {
    render(
      <Section className="section-test">
        <div data-testid="child">Child Content</div>
      </Section>
    );
    expect(screen.getByTestId("child")).toHaveTextContent("Child Content");
  });

  it("applies the default class", () => {
    render(
      <Section className="section-test">
        <div data-testid="child">Child Content</div>
      </Section>
    );
    expect(screen.getByTestId("section")).toHaveClass("section-test");
  });
});
