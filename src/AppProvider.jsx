import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { deviceDetect } from "react-device-detect";
import { useWindowSizeWithBreakpoints } from "hooks/useWindowSizeWithBreakpoints";
import "./assets/stylesheets/all.scss";
import App from "./App";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(null);
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [userDevice, setUserDevice] = useState(() => deviceDetect() || {});

  const { windowSize, mediaClass, breakpoints } =
    useWindowSizeWithBreakpoints();

  const updateCurrentSection = useCallback(() => {
    const appElement = document.querySelector("#benzo-app");
    if (!appElement) return;

    const sections = appElement.querySelectorAll("section");
    let currentSection = "lighthouse";
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
    window.addEventListener("scroll", updateCurrentSection, true);
    updateCurrentSection();
    return () => {
      window.removeEventListener("scroll", updateCurrentSection);
    };
  }, [updateCurrentSection]);

  useEffect(() => {
    const detectedDevice = deviceDetect();
    if (detectedDevice) {
      console.log("Detected device:", detectedDevice);
      setUserDevice(detectedDevice);
    }
    console.log("window.devicePixelRatio", window.devicePixelRatio);
  }, []);

  const contextValues = useMemo(
    () => ({
      activeCaseStudy,
      breakpoints,
      isModalActive,
      currentSection,
      mediaClass,
      setActiveCaseStudy,
      setIsModalActive,
      userDevice,
      windowSize,
    }),
    [
      activeCaseStudy,
      breakpoints,
      isModalActive,
      currentSection,
      mediaClass,
      setActiveCaseStudy,
      setIsModalActive,
      userDevice,
      windowSize,
    ]
  );

  return (
    <AppContext.Provider value={contextValues}>
      <App />
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
