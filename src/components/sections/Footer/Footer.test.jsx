import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders the footer element", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  it("displays the current year", () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    expect(
      screen.getByText(`® ${currentYear} Benzo the Great. All rights reserved.`)
    ).toBeInTheDocument();
  });

  it("renders the disclaimer text", () => {
    render(<Footer />);
    expect(
      screen.getByText(/Made on a Mac in sunny Southern California/i)
    ).toBeInTheDocument();
  });

  it("lists the tools and technologies used", () => {
    render(<Footer />);
    expect(
      screen.getByText(/Code: TypeScript, React, Sass/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Animations: PixiJS, GSAP/i)).toBeInTheDocument();
    expect(screen.getByText(/Linting: ESLint, Stylelint/i)).toBeInTheDocument();
    expect(screen.getByText(/Testing: Jest/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Auditing: Google Lighthouse/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Hosting: Github Pages/i)).toBeInTheDocument();
  });
});
