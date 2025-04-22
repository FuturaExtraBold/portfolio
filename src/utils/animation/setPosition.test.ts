import { setPosition } from "./setPosition";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";

jest.mock("gsap", () => ({
  gsap: {
    set: jest.fn(),
  },
}));

describe("setPosition", () => {
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

    setPosition({ ref, x: 100, y: 200 });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "setPosition ref.current is not defined"
    );
    expect(gsap.set).not.toHaveBeenCalled();

    consoleWarnSpy.mockRestore();
  });

  it("should call gsap.set with x and y when usePixi is false", () => {
    setPosition({ ref, x: 100, y: 200 });

    expect(gsap.set).toHaveBeenCalledWith(ref.current, {
      x: 100,
      y: 200,
    });
  });

  it("should call gsap.set with pixi x and y when usePixi is true", () => {
    setPosition({ ref, x: 100, y: 200, usePixi: true });

    expect(gsap.set).toHaveBeenCalledWith(ref.current, {
      pixi: {
        x: 100,
        y: 200,
      },
    });
  });
});
