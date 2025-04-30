import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  type JSX,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { deviceDetect } from "react-device-detect";
import {
  useWindowSizeWithBreakpoints,
  type WindowSize,
} from "hooks/useWindowSizeWithBreakpoints";
import "../assets/stylesheets/all.scss";
import App from "../App";

const AppContext = createContext<{
  activeCaseStudy: string | null;
  breakpoints: Record<string, number>;
  isModalActive: boolean;
  currentSection: string | null;
  mediaClass: string;
  setActiveCaseStudy: Dispatch<SetStateAction<string | null>>;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
  userDevice: any;
  windowSize: WindowSize;
}>({
  activeCaseStudy: null,
  breakpoints: {},
  isModalActive: false,
  currentSection: null,
  mediaClass: "",
  setActiveCaseStudy: () => null,
  setIsModalActive: () => {},
  userDevice: {},
  windowSize: { width: 0, height: 0 },
});

export const AppProvider = ({
  children,
}: PropsWithChildren<{}>): JSX.Element => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);
  const [userDevice, setUserDevice] = useState(
    () => deviceDetect(navigator.userAgent) || {}
  );

  const { windowSize, mediaClass, breakpoints } =
    useWindowSizeWithBreakpoints();

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
    window.addEventListener("scroll", updateCurrentSection, true);
    updateCurrentSection();
    return () => {
      window.removeEventListener("scroll", updateCurrentSection);
    };
  }, [updateCurrentSection]);

  useEffect(() => {
    const detectedDevice = deviceDetect(navigator.userAgent);
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
