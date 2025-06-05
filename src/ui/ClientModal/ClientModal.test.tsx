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
});
