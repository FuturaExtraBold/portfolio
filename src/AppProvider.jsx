import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { deviceDetect } from "react-device-detect";
import "./assets/stylesheets/all.scss";
import exportedBreakpoints from "./assets/stylesheets/base/breakpoints.scss";

import App from "./App";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState("hero");
  const [mediaClass, setMediaClass] = useState("desktop");
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const breakpoints = useMemo(() => {
    const resolvedBreakpoints = {};
    Object.keys(exportedBreakpoints).forEach((key) => {
      resolvedBreakpoints[key] = parseInt(exportedBreakpoints[key], 10);
    });
    return resolvedBreakpoints;
  }, []);

  const updateWindowSize = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width < breakpoints.md) {
      setMediaClass("mobile");
    }
    if (width >= breakpoints.md && width < breakpoints.lg) {
      setMediaClass("tablet");
    }
    if (width >= breakpoints.lg && width < breakpoints.xl) {
      setMediaClass("desktop");
    }
    if (width >= breakpoints.xl && width < breakpoints.xxl) {
      setMediaClass("desktop-large");
    }
    if (width >= breakpoints.xxl) {
      setMediaClass("desktop-max");
    }
    setWindowSize({ width, height });
  }, [breakpoints]);

  const updateCurrentSection = useCallback(() => {
    const appElement = document.querySelector("#benzo-app");
    if (!appElement) return;

    const sections = appElement.querySelectorAll("section");
    let currentSection = "hero";
    const windowHeight = window.innerHeight;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= windowHeight / 2 && rect.bottom > windowHeight / 2) {
        currentSection = section.className;
      }
    });
    setCurrentSection(currentSection);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    updateWindowSize();
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, [updateWindowSize]);

  useEffect(() => {
    window.addEventListener("scroll", updateCurrentSection, true);
    updateCurrentSection();
    return () => {
      window.removeEventListener("scroll", updateCurrentSection);
    };
  }, [updateCurrentSection]);

  useEffect(() => {
    console.log("device:", deviceDetect());
  }, []);

  const contextValues = useMemo(
    () => ({
      breakpoints,
      currentSection,
      mediaClass,
      windowSize,
    }),
    [breakpoints, currentSection, mediaClass, windowSize]
  );

  return (
    <AppContext.Provider value={contextValues}>
      <App />
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
