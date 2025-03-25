import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import App from "./App";

const AppContext = createContext();

export const AppProvider = ({ children, parentRef }) => {
  const [mediaClass, setMediaClass] = useState("desktop");
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

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
    console.log("window size updated:", { width, height });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    updateWindowSize();
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, [updateWindowSize]);

  const contextValues = useMemo(
    () => ({
      mediaClass,
      windowSize,
    }),
    [mediaClass, windowSize]
  );

  return (
    <AppContext.Provider value={contextValues}>
      <App />
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
