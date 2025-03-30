import React, {
  createContext,
  useContext,
  useMemo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import Benzo from "./Benzo";

const BenzoContext = createContext();

export const BenzoProvider = ({ parentRef }) => {
  gsap.registerPlugin(PixiPlugin);
  PixiPlugin.registerPIXI(parentRef.current);

  const glowColors = useMemo(
    () => [0x00ff00, 0xff0000, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff],
    []
  );

  const glowColorsSmoke = useMemo(
    () => [0x90e575, 0x1bd14a, 0x2ee554, 0xfffffe],
    []
  );

  const glowColorsReflection = useMemo(
    () => [0x90e575, 0x1bd14a, 0x2ee554, 0xfffffe],
    []
  );

  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });
  const [colorCrystalBall, setColorCrystalBall] = useState(0xffffff);
  const [colorSmoke, setColorSmoke] = useState(0xffffff);
  const [durationCrystalBall, setDurationCrystalBall] = useState(0.5);
  const [durationSmoke, setDurationSmoke] = useState(0.5);

  const updateParentSize = useCallback(() => {
    if (parentRef.current) {
      const width = parentRef.current.clientWidth;
      const height = parentRef.current.clientHeight;
      setParentSize({ width, height });
      // console.log("parent size updated:", { width, height });
    }
  }, [parentRef]);

  const updateCrystalBall = useCallback(() => {
    if (parentRef.current) {
      const color = glowColors[Math.floor(Math.random() * glowColors.length)];
      const duration = Math.random() * 1 + 0.5;
      setColorCrystalBall(color);
      setDurationCrystalBall(duration);
      setTimeout(() => {
        updateCrystalBall();
      }, duration * 1000);
    }
  }, [glowColors, parentRef]);

  const updateReflection = useCallback(() => {
    if (parentRef.current) {
      const color =
        glowColorsReflection[
          Math.floor(Math.random() * glowColorsReflection.length)
        ];
      const duration = Math.random() * 1 + 0.5;
      setColorSmoke(color);
      setDurationSmoke(duration);
      setTimeout(() => {
        updateReflection();
      }, duration * 1000);
    }
  }, [glowColorsReflection, parentRef]);

  useEffect(() => {
    window.addEventListener("resize", updateParentSize);
    updateParentSize();
    return () => {
      window.removeEventListener("resize", updateParentSize);
    };
  }, [parentRef, updateParentSize]);

  useEffect(() => {
    updateCrystalBall();
  }, [updateCrystalBall]);

  useEffect(() => {
    updateReflection();
  }, [updateReflection]);

  const contextValues = useMemo(
    () => ({
      glowColorsSmoke,
      parentRef,
      parentSize,
      colorCrystalBall,
      colorSmoke,
      durationCrystalBall,
      durationSmoke,
    }),
    [
      glowColorsSmoke,
      parentRef,
      parentSize,
      colorCrystalBall,
      colorSmoke,
      durationCrystalBall,
      durationSmoke,
    ]
  );

  return (
    <BenzoContext.Provider value={contextValues}>
      <Benzo parentRef={parentRef} />
    </BenzoContext.Provider>
  );
};

export const useBenzo = () => useContext(BenzoContext);
