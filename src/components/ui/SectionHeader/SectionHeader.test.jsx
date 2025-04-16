import { render, screen } from "@testing-library/react";
import SectionHeader from "./SectionHeader";

const baseProps = {
  title: "Test Title",
  subtitle: "Test Subtitle",
};

const renderHeader = (props = {}) => {
  return render(<SectionHeader {...baseProps} {...props} />);
};

describe("Section Header Component", () => {
  it("renders the title and subtitle", () => {
    renderHeader();
    expect(screen.getByText(baseProps.title)).toBeInTheDocument();
    expect(screen.getByText(baseProps.subtitle)).toBeInTheDocument();
  });

  it("applies the default variant class", () => {
    renderHeader();
    expect(screen.getByRole("banner")).toHaveClass("section-header--default");
  });

  it("applies the dark variant class when specified", () => {
    renderHeader({ variant: "dark" });
    expect(screen.getByRole("banner")).toHaveClass("section-header--dark");
  });

  it("renders the hairline by default", () => {
    renderHeader();
    expect(screen.getByTestId("section-header__hairline")).toBeInTheDocument();
  });

  it("does not render the hairline when useHairline is false", () => {
    renderHeader({ useHairline: false });
    expect(
      screen.queryByTestId("section-header__hairline")
    ).not.toBeInTheDocument();
  });

  it("applies the text shadow class when useShadow is true", () => {
    renderHeader({ useShadow: true });
    expect(screen.getByRole("banner")).toHaveClass(
      "section-header--text-shadow"
    );
  });
});
