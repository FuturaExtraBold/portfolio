import { animateScale } from "./animateScale";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";

jest.mock("gsap", () => ({
  gsap: {
    killTweensOf: jest.fn(),
    fromTo: jest.fn(),
  },
}));

describe("animateScale", () => {
  let ref: { current: Sprite | null };

  beforeEach(() => {
    jest.clearAllMocks();
    ref = { current: new Sprite() };
  });

  it("should log a warning and return if ref.current is null", () => {
    const consoleWarnSpy = jest
      .spyOn(console, "warn")
      .mockImplementation(() => {});
    ref.current = null;

    animateScale({ ref, duration: 1 });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "animateScale ref.current is not defined"
    );
    expect(gsap.killTweensOf).not.toHaveBeenCalled();
    expect(gsap.fromTo).not.toHaveBeenCalled();

    consoleWarnSpy.mockRestore();
  });

  it("should call gsap.killTweensOf with ref.current", () => {
    animateScale({ ref, duration: 1 });

    expect(gsap.killTweensOf).toHaveBeenCalledWith(ref.current, "pixi");
  });

  it("should call gsap.fromTo with the correct parameters", () => {
    const options = {
      ref,
      duration: 1,
      ease: "power1.inOut",
      repeat: true,
      yoyo: true,
      scaleAmount: 1.5,
    };

    animateScale(options);

    expect(gsap.fromTo).toHaveBeenCalledWith(
      ref.current,
      { pixi: { scale: 1 } },
      {
        pixi: { scale: options.scaleAmount },
        duration: options.duration,
        ease: options.ease,
        repeat: -1, // Infinite repeat
        yoyo: options.yoyo,
      }
    );
  });

  it("should set repeat to 0 if repeat is false", () => {
    const options = {
      ref,
      duration: 1,
      repeat: false,
      scaleAmount: 1.3,
    };

    animateScale(options);

    expect(gsap.fromTo).toHaveBeenCalledWith(
      ref.current,
      { pixi: { scale: 1 } },
      expect.objectContaining({
        repeat: 0, // No repeat
      })
    );
  });
});
