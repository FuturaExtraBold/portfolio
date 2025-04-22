import { animateTint } from "./animateTint";
import { gsap } from "gsap";
import { Sprite } from "pixi.js";

jest.mock("gsap", () => ({
  gsap: {
    to: jest.fn(),
  },
}));

describe("animateTint", () => {
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

    animateTint({ ref, color: 0xff0000, duration: 1 });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "animateTint ref.current is not defined"
    );
    expect(gsap.to).not.toHaveBeenCalled();

    consoleWarnSpy.mockRestore();
  });

  it("should call gsap.to with the correct parameters", () => {
    const options = {
      ref,
      color: 0xff0000,
      duration: 1,
    };

    animateTint(options);

    expect(gsap.to).toHaveBeenCalledWith(ref.current, {
      pixi: { tint: options.color },
      duration: options.duration,
    });
  });
});
