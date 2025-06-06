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
import { useAssetSelector } from "hooks/useAssetSelector";
import "../assets/stylesheets/all.scss";
import App from "../App";

const AppContext = createContext<{
  activeCaseStudy: string | null;
  appIsLoaded: boolean;
  assetSize: string;
  breakpoints: Record<string, number>;
  benzoLoadProgress: number;
  isModalActive: boolean;
  currentSection: string | null;
  mediaClass: string;
  setActiveCaseStudy: Dispatch<SetStateAction<string | null>>;
  setBenzoLoadProgress: Dispatch<SetStateAction<number>>;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
  userDevice: any;
  windowSize: WindowSize;
}>({
  activeCaseStudy: null,
  appIsLoaded: false,
  assetSize: "desktop",
  benzoLoadProgress: 0,
  breakpoints: {},
  isModalActive: false,
  currentSection: null,
  mediaClass: "",
  setActiveCaseStudy: () => null,
  setBenzoLoadProgress: () => null,
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
  const [benzoLoadProgress, setBenzoLoadProgress] = useState(0);
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  const { windowSize, mediaClass, breakpoints } =
    useWindowSizeWithBreakpoints();

  const assetSize = useAssetSelector();

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
      console.log("window.devicePixelRatio", window.devicePixelRatio);
      setUserDevice(detectedDevice);
    }
  }, []);

  useEffect(() => {
    const handleLoad = () => setAppIsLoaded(true);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const contextValues = useMemo(
    () => ({
      activeCaseStudy,
      appIsLoaded,
      assetSize,
      benzoLoadProgress,
      breakpoints,
      isModalActive,
      currentSection,
      mediaClass,
      setActiveCaseStudy,
      setBenzoLoadProgress,
      setIsModalActive,
      userDevice,
      windowSize,
    }),
    [
      activeCaseStudy,
      assetSize,
      benzoLoadProgress,
      breakpoints,
      isModalActive,
      currentSection,
      mediaClass,
      setActiveCaseStudy,
      setBenzoLoadProgress,
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
