import { setScale } from "./setScale";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";

jest.mock("gsap", () => ({
  gsap: {
    set: jest.fn(),
  },
}));

describe("setScale", () => {
  let ref: { current: Sprite | null };
  let scaleRef: { current: number };
  let parentSize: { width: number; height: number };
  let scaleOptions: any;

  beforeEach(() => {
    jest.clearAllMocks();
    ref = { current: new Sprite() };
    scaleRef = { current: 1 };
    parentSize = { width: 1024, height: 768 };

    scaleOptions = {
      ref,
      parentSize,
      scaleRef,
      maxScale: 1,
      minScale: 0.5,
      maxWidth: 1440,
      minWidth: 768,
    };
  });

  it("should log a warning and return 0.5 if ref.current is null", () => {
    const consoleWarnSpy = jest
      .spyOn(console, "warn")
      .mockImplementation(() => {});
    ref.current = null;

    const scale = setScale({ ...scaleOptions, ref });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "setScale ref.current is not defined"
    );
    expect(scale).toBe(0.5);
    expect(gsap.set).not.toHaveBeenCalled();

    consoleWarnSpy.mockRestore();
  });

  it("should log a warning and return 0.5 if parentSize is not defined", () => {
    const consoleWarnSpy = jest
      .spyOn(console, "warn")
      .mockImplementation(() => {});
    parentSize = null as any;

    const scale = setScale({ ...scaleOptions, parentSize });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "setScale parentSize is not defined"
    );
    expect(scale).toBe(0.5);
    expect(gsap.set).not.toHaveBeenCalled();

    consoleWarnSpy.mockRestore();
  });

  it("should calculate and set the correct scale", () => {
    const scale = setScale(scaleOptions);

    const expectedScale = Math.min(
      1,
      Math.max(0.5, ((parentSize.width - 768) / (1440 - 768)) * (1 - 0.5) + 0.5)
    );

    expect(scale).toBe(expectedScale);
    expect(gsap.set).toHaveBeenCalledWith(ref.current, {
      pixi: { scale: expectedScale },
    });
    expect(scaleRef.current).toBe(expectedScale);
  });

  it("should return maxScale if parentSize.width is greater than maxWidth", () => {
    parentSize.width = 1600;

    const scale = setScale({ ...scaleOptions, parentSize });

    expect(scale).toBe(1);
    expect(gsap.set).toHaveBeenCalledWith(ref.current, { pixi: { scale: 1 } });
    expect(scaleRef.current).toBe(1);
  });

  it("should return minScale if parentSize.width is less than minWidth", () => {
    parentSize.width = 600;

    const scale = setScale({ ...scaleOptions, parentSize });

    expect(scale).toBe(0.5);
    expect(gsap.set).toHaveBeenCalledWith(ref.current, {
      pixi: { scale: 0.5 },
    });
    expect(scaleRef.current).toBe(0.5);
  });
});
