import { render, screen, fireEvent } from "@testing-library/react";
import ClientModal from "./ClientModal";
import { useApp } from "providers/AppProvider";
import { caseStudies } from "data/clients";

// Mock the `useApp` hook
jest.mock("providers/AppProvider", () => ({
  useApp: jest.fn(),
}));

jest.mock("data/clients", () => ({
  caseStudies: [
    {
      id: "case-study-1",
      title: "Disney Magic",
      logoComponent: () => <div>Logo</div>,
      client: "Disney",
      projects: [
        {
          title: "Official Mickey Mouse Homepage",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          gallery: [
            "mickey_1.jpg",
            "mickey_2.jpg",
            "mickey_3.jpg",
            "mickey_4.jpg",
            "mickey_5.jpg",
            "mickey_6.jpg",
          ],
        },
      ],
    },
  ],
}));

describe("ClientModal Component", () => {
  beforeEach(() => {
    (useApp as jest.Mock).mockReturnValue({
      activeCaseStudy: "case-study-1",
      isModalActive: true,
      setIsModalActive: jest.fn(),
    });
  });

  it("renders the ClientModal component when active", () => {
    render(<ClientModal />);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass("client-modal--active");
  });

  it("renders the correct case study content", () => {
    const caseStudy = caseStudies.find((study) => study.id === "case-study-1");
    expect(caseStudy).toBeDefined();

    render(<ClientModal />);
    expect(screen.getByText(caseStudy!.title || "")).toBeInTheDocument();
  });

  it("calls setIsModalActive when the overlay is clicked", () => {
    const mockSetIsModalActive = jest.fn();
    (useApp as jest.Mock).mockReturnValue({
      activeCaseStudy: "case-study-1",
      isModalActive: true,
      setIsModalActive: mockSetIsModalActive,
    });

    render(<ClientModal />);
    const overlay = screen.getByTestId("client-modal-overlay");
    fireEvent.click(overlay);
    expect(mockSetIsModalActive).toHaveBeenCalledWith(false);
  });

  it("does not close the modal when content is clicked", () => {
    const mockSetIsModalActive = jest.fn();
    (useApp as jest.Mock).mockReturnValue({
      activeCaseStudy: "case-study-1",
      isModalActive: true,
      setIsModalActive: mockSetIsModalActive,
    });

    render(<ClientModal />);
    const content = screen.getByTestId("client-modal-content");
    fireEvent.click(content);
    expect(mockSetIsModalActive).not.toHaveBeenCalled();
  });

  it("renders the projects and galleries for the case study", () => {
    render(<ClientModal />);
    caseStudies
      .filter((study) => study.id === "case-study-1")
      .forEach((caseStudy) => {
        caseStudy.projects.forEach((project) => {
          expect(screen.getByText(project.title)).toBeInTheDocument();
          project.gallery.forEach((_, i) => {
            const altText = `${project.title} - ${i + 1}`;
            expect(screen.getByAltText(altText)).toBeInTheDocument();
          });
        });
      });
  });
});
