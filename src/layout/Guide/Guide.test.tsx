import { render, screen } from "@testing-library/react";
import Guide from "./Guide";

describe("Guide component", () => {
  it("renders children correctly", () => {
    render(<Guide />);
    expect(screen.getByTestId("guidelines")).toHaveClass("guidelines");
  });
});
