import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import App from "./App";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState("hero");
  const [mediaClass, setMediaClass] = useState("desktop");
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const appRef = useRef(null);

  const updateWindowSize = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width < 768) {
      setMediaClass("mobile");
    }
    if (width >= 768 && width < 1200) {
      setMediaClass("tablet");
    }
    if (width >= 1200 && width < 1800) {
      setMediaClass("desktop");
    }
    if (width >= 1800) {
      setMediaClass("desktop-large");
    }
    setWindowSize({ width, height });
  }, []);

  const updateCurrentSection = useCallback(() => {
    const sections = document.querySelectorAll("section");
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

  const contextValues = useMemo(
    () => ({
      currentSection,
      mediaClass,
      windowSize,
    }),
    [currentSection, mediaClass, windowSize]
  );

  return (
    <AppContext.Provider value={contextValues}>
      <App ref={appRef} />
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
