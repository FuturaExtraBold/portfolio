import { animateFloat } from "./animateFloat";
import { gsap } from "gsap";

jest.mock("gsap", () => ({
  gsap: {
    killTweensOf: jest.fn(),
    set: jest.fn(),
    ticker: {
      add: jest.fn(),
      remove: jest.fn(),
    },
  },
}));

describe("animateFloat", () => {
  let ref: React.RefObject<HTMLImageElement | null>;

  beforeEach(() => {
    jest.clearAllMocks();
    ref = { current: document.createElement("img") };
  });

  it("should log a warning and return a no-op function if ref.current is null", () => {
    const consoleWarnSpy = jest
      .spyOn(console, "warn")
      .mockImplementation(() => {});
    ref.current = null;
    const cleanup = animateFloat({ ref });
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "animateFloat ref.current is not defined"
    );
    expect(typeof cleanup).toBe("function");
    cleanup();
    consoleWarnSpy.mockRestore();
  });

  it("should call gsap.killTweensOf with ref.current", () => {
    animateFloat({ ref });
    expect(gsap.killTweensOf).toHaveBeenCalledWith(ref.current);
  });

  it("should add a tick function to gsap.ticker", () => {
    animateFloat({ ref });
    expect(gsap.ticker.add).toHaveBeenCalledWith(expect.any(Function));
  });

  it("should return a cleanup function that removes the tick and kills tweens", () => {
    const cleanup = animateFloat({ ref });
    cleanup();
    expect(gsap.ticker.remove).toHaveBeenCalledWith(expect.any(Function));
    expect(gsap.killTweensOf).toHaveBeenCalledWith(ref.current);
  });

  it("should set x, y, and rotation on ref.current during the tick", () => {
    const tickMock = jest.fn();
    (gsap.ticker.add as jest.Mock).mockImplementation((tick) =>
      tickMock.mockImplementation(tick)
    );
    animateFloat({
      ref,
      amplitudeX: 10,
      amplitudeY: 5,
      rotationRange: 180,
      tickTime: 0.01,
    });
    tickMock();
    expect(gsap.set).toHaveBeenCalledWith(ref.current, {
      x: expect.any(Number),
      y: expect.any(Number),
      rotation: expect.any(Number),
    });
  });
});
