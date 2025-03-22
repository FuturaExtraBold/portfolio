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

export const BenzoProvider = ({ children, parentRef }) => {
  // register the plugin
  gsap.registerPlugin(PixiPlugin);

  // give the plugin a reference to the PIXI object
  PixiPlugin.registerPIXI(parentRef.current);

  const glowColors = useMemo(
    () => [0x00ff00, 0xff0000, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff],
    []
  );

  const glowColorsFire = useMemo(
    () => ["90e575", "1bd14a", "2ee554", "b1e487"],
    []
  );

  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });

  const updateParentSize = useCallback(() => {
    if (parentRef.current) {
      const width = parentRef.current.clientWidth;
      const height = parentRef.current.clientHeight;
      setParentSize({ width, height });
    }
  }, [parentRef]);

  useEffect(() => {
    window.addEventListener("resize", updateParentSize);
    updateParentSize();
    return () => {
      window.removeEventListener("resize", updateParentSize);
    };
  }, [updateParentSize]);

  const contextValues = useMemo(
    () => ({ glowColors, glowColorsFire, parentRef, parentSize }),
    [glowColors, glowColorsFire, parentRef, parentSize]
  );

  return (
    <BenzoContext.Provider value={contextValues}>
      <Benzo parentRef={parentRef} />
      {children}
    </BenzoContext.Provider>
  );
};

export const useBenzo = () => useContext(BenzoContext);
