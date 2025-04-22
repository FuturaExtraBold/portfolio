import { animateRotation } from "./animateRotation";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";

jest.mock("gsap", () => ({
  gsap: {
    killTweensOf: jest.fn(),
    set: jest.fn(),
    to: jest.fn(),
  },
}));

describe("animateRotation", () => {
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

    animateRotation({ ref, duration: 1 });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "animateRotation ref.current is not defined"
    );
    expect(gsap.killTweensOf).not.toHaveBeenCalled();
    expect(gsap.set).not.toHaveBeenCalled();
    expect(gsap.to).not.toHaveBeenCalled();

    consoleWarnSpy.mockRestore();
  });

  it("should call gsap.killTweensOf with ref.current", () => {
    animateRotation({ ref, duration: 1 });

    expect(gsap.killTweensOf).toHaveBeenCalledWith(ref.current, "pixi");
  });

  it("should call gsap.set to initialize rotation to 0", () => {
    animateRotation({ ref, duration: 1 });

    expect(gsap.set).toHaveBeenCalledWith(ref.current, {
      pixi: { rotation: 0 },
    });
  });

  it("should call gsap.to with the correct parameters", () => {
    const options = {
      ref,
      duration: 2,
      ease: "power1.inOut",
      origin: 0.5,
      rotationAmount: 180,
      repeat: false,
    };

    animateRotation(options);

    expect(gsap.to).toHaveBeenCalledWith(ref.current, {
      pixi: { anchor: options.origin, rotation: options.rotationAmount },
      duration: options.duration,
      ease: options.ease,
      onComplete: expect.any(Function),
    });
  });

  it("should recursively call animateRotation if repeat is true", () => {
    const options = {
      ref,
      duration: 2,
      ease: "power1.inOut",
      origin: 0.5,
      rotationAmount: 180,
      repeat: true,
    };

    let recursionCount = 1;
    const maxRecursions = 3;

    (gsap.to as jest.Mock).mockImplementation((_, params) => {
      if (params.onComplete && recursionCount < maxRecursions) {
        recursionCount++;
        params.onComplete();
      }
    });

    animateRotation(options);

    expect(gsap.to).toHaveBeenCalledTimes(maxRecursions);
  });

  it("should not recursively call animateRotation if repeat is false", () => {
    const options = {
      ref,
      duration: 2,
      ease: "power1.inOut",
      origin: 0.5,
      rotationAmount: 180,
      repeat: false,
    };

    (gsap.to as jest.Mock).mockImplementation((_, params) => {
      if (params.onComplete) {
        params.onComplete();
      }
    });

    animateRotation(options);

    expect(gsap.to).toHaveBeenCalledTimes(1);
  });
});
