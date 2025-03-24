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
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const updateWindowSize = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
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
      windowSize,
    }),
    [windowSize]
  );

  return (
    <AppContext.Provider value={contextValues}>
      <App />
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
