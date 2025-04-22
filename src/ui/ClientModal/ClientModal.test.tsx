import { render, screen, fireEvent } from "@testing-library/react";
import { useApp } from "providers/AppProvider";
import ClientModal from "./ClientModal";

jest.mock("providers/AppProvider", () => ({
  useApp: jest.fn(),
}));

describe("ClientModal", () => {
  const mockSetIsModalActive = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useApp as jest.Mock).mockReturnValue({
      activeCaseStudy: "1",
      isModalActive: true,
      setIsModalActive: mockSetIsModalActive,
    });
  });

  it("renders the modal when active", () => {
    render(<ClientModal />);
    expect(screen.getByTestId("client-modal")).toBeInTheDocument();
    expect(screen.getByTestId("client-modal")).toHaveClass(
      "client-modal--active"
    );
  });

  it("closes the modal when overlay is clicked", () => {
    render(<ClientModal />);
    fireEvent.click(screen.getByTestId("client-modal-overlay"));
    expect(mockSetIsModalActive).toHaveBeenCalledWith(false);
  });

  xit("prevents event propagation on overlay interactions", () => {
    render(<ClientModal />);
    const overlay = screen.getByTestId("client-modal-overlay");
    const stopPropagationMock = jest.fn();
    fireEvent.click(overlay, { stopPropagation: stopPropagationMock });
    fireEvent.wheel(overlay, { stopPropagation: stopPropagationMock });
    fireEvent.touchStart(overlay, { stopPropagation: stopPropagationMock });
    fireEvent.mouseMove(overlay, { stopPropagation: stopPropagationMock });
    expect(stopPropagationMock).toHaveBeenCalledTimes(4);
  });

  xit("renders case study content when available", () => {
    (useApp as jest.Mock).mockReturnValue({
      activeCaseStudy: "1",
      isModalActive: true,
      setIsModalActive: mockSetIsModalActive,
    });
    render(<ClientModal />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByTestId("client-modal-close-icon")).toBeInTheDocument();
  });

  xit("does not render content when caseStudy is undefined", () => {
    (useApp as jest.Mock).mockReturnValue({
      activeCaseStudy: undefined,
      isModalActive: true,
      setIsModalActive: mockSetIsModalActive,
    });
    render(<ClientModal />);
    expect(
      screen.queryByTestId("client-modal-close-icon")
    ).not.toBeInTheDocument();
  });
});
