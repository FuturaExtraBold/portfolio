import { animateTick } from "./animateTick";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";

jest.mock("gsap", () => ({
  gsap: {
    set: jest.fn(),
    ticker: {
      add: jest.fn(),
      remove: jest.fn(),
    },
  },
}));

describe("animateTick", () => {
  let ref: { current: Sprite | null };
  let parentSizeRef: { current: { width: number; height: number } };
  let scaleRef: { current: number };

  beforeEach(() => {
    jest.clearAllMocks();
    ref = { current: new Sprite() };
    parentSizeRef = { current: { width: 800, height: 600 } };
    scaleRef = { current: 1 }; // Ensure scaleRef.current is a number or null
  });

  // it("should log a warning and return a no-op function if ref.current is null", () => {
  //   const consoleWarnSpy = jest
  //     .spyOn(console, "warn")
  //     .mockImplementation(() => {});
  //   ref.current = null;

  //   const cleanup = animateTick({
  //     ref,
  //     parentSizeRef,
  //     scaleRef,
  //     baseXAmount: 2,
  //     baseYAmount: 2,
  //     offsetYAmount: 50,
  //   });

  //   expect(consoleWarnSpy).toHaveBeenCalledWith(
  //     "animateTick ref.current is not defined"
  //   );
  //   expect(typeof cleanup).toBe("function");
  //   cleanup(); // Ensure no errors occur when calling the returned function

  //   consoleWarnSpy.mockRestore();
  // });

  it("should add a tick function to gsap.ticker", () => {
    animateTick({
      ref,
      parentSizeRef,
      scaleRef,
      baseXAmount: 2,
      baseYAmount: 2,
      offsetYAmount: 50,
    });

    expect(gsap.ticker.add).toHaveBeenCalledWith(expect.any(Function));
  });

  // it("should return a cleanup function that removes the tick", () => {
  //   const cleanup = animateTick({
  //     ref,
  //     parentSizeRef,
  //     scaleRef,
  //     baseXAmount: 2,
  //     baseYAmount: 2,
  //     offsetYAmount: 50,
  //   });

  //   cleanup();

  //   expect(gsap.ticker.remove).toHaveBeenCalledWith(expect.any(Function));
  // });

  it("should set x, y, and rotation on ref.current during the tick", () => {
    const tickMock = jest.fn();
    (gsap.ticker.add as jest.Mock).mockImplementation((tick) =>
      tickMock.mockImplementation(tick)
    );

    animateTick({
      ref,
      parentSizeRef,
      scaleRef,
      baseXAmount: 2,
      baseYAmount: 2,
      offsetYAmount: 50,
    });

    // Simulate a tick
    tickMock();

    expect(gsap.set).toHaveBeenCalledWith(ref.current, {
      pixi: {
        x: expect.any(Number),
        y: expect.any(Number),
        rotation: expect.any(Number),
      },
    });
  });
});
