import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  type JSX,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { deviceDetect } from "react-device-detect";
import { useViewport as useViewportState } from "hooks/useViewport";
import type { WindowSize } from "hooks/useViewport";
import "../assets/stylesheets/all.scss";

interface ViewportContextValue {
  assetSize: string;
  breakpoints: Record<string, number>;
  isMobile: boolean;
  mediaClass: string;
  windowSize: WindowSize;
}

interface DeviceContextValue {
  userDevice: any;
}

interface ModalContextValue {
  activeCaseStudy: string | null;
  isModalActive: boolean;
  setActiveCaseStudy: Dispatch<SetStateAction<string | null>>;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
}

interface SectionContextValue {
  currentSection: string | null;
}

interface AppLoadContextValue {
  appIsLoaded: boolean;
}

interface BenzoLoadContextValue {
  benzoLoadProgress: number;
  setBenzoLoadProgress: Dispatch<SetStateAction<number>>;
}

const ViewportContext = createContext<ViewportContextValue>({
  assetSize: "desktop",
  breakpoints: {},
  isMobile: false,
  mediaClass: "",
  windowSize: { width: 0, height: 0 },
});

const DeviceContext = createContext<DeviceContextValue>({
  userDevice: {},
});

const ModalContext = createContext<ModalContextValue>({
  activeCaseStudy: null,
  isModalActive: false,
  setActiveCaseStudy: () => null,
  setIsModalActive: () => {},
});

const SectionContext = createContext<SectionContextValue>({
  currentSection: null,
});

const AppLoadContext = createContext<AppLoadContextValue>({
  appIsLoaded: false,
});

const BenzoLoadContext = createContext<BenzoLoadContextValue>({
  benzoLoadProgress: 0,
  setBenzoLoadProgress: () => null,
});

const ViewportProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const { windowSize, mediaClass, breakpoints, assetSize, isMobile } =
    useViewportState();

  const value = useMemo(
    () => ({ windowSize, mediaClass, breakpoints, assetSize, isMobile }),
    [windowSize, mediaClass, breakpoints, assetSize, isMobile]
  );

  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  );
};

const DeviceProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const [userDevice, setUserDevice] = useState(
    () => deviceDetect(navigator.userAgent) || {}
  );

  useEffect(() => {
    const detectedDevice = deviceDetect(navigator.userAgent);
    if (detectedDevice) {
      if (import.meta.env.DEV) {
        console.log("Detected device:", detectedDevice);
        console.log("window.devicePixelRatio", window.devicePixelRatio);
      }
      setUserDevice(detectedDevice);
    }
  }, []);

  const value = useMemo(() => ({ userDevice }), [userDevice]);

  return (
    <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
  );
};

const ModalProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      activeCaseStudy,
      isModalActive,
      setActiveCaseStudy,
      setIsModalActive,
    }),
    [activeCaseStudy, isModalActive]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

const SectionProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const appElement = document.querySelector("#benzo-app");
    if (!appElement) return;

    const sections = Array.from(appElement.querySelectorAll("section"));
    if (!sections.length) return;

    const setSectionFromElement = (element: Element) => {
      const className = (element as HTMLElement).className || "hero";
      setCurrentSection(className);
    };

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const visibleRatios = new Map<Element, number>();
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleRatios.set(entry.target, entry.intersectionRatio);
            } else {
              visibleRatios.delete(entry.target);
            }
          });

          if (!visibleRatios.size) return;
          let bestElement: Element | null = null;
          let bestRatio = 0;

          visibleRatios.forEach((ratio, element) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestElement = element;
            }
          });

          if (bestElement) {
            setSectionFromElement(bestElement);
          }
        },
        { threshold: [0.25, 0.5, 0.75] }
      );

      sections.forEach((section) => observer.observe(section));
      setSectionFromElement(sections[0]);
      return () => observer.disconnect();
    }

    const updateCurrentSection = () => {
      let resolvedSection = "hero";
      const windowHeight = window.innerHeight;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom > windowHeight / 2) {
          resolvedSection = (section as HTMLElement).className;
        }
      });
      setCurrentSection(resolvedSection);
    };

    const scrollOptions = { passive: true } as const;
    window.addEventListener("scroll", updateCurrentSection, scrollOptions);
    updateCurrentSection();
    return () => {
      window.removeEventListener("scroll", updateCurrentSection, scrollOptions);
    };
  }, []);

  const value = useMemo(() => ({ currentSection }), [currentSection]);

  return (
    <SectionContext.Provider value={value}>{children}</SectionContext.Provider>
  );
};

const AppLoadProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setAppIsLoaded(true);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const value = useMemo(() => ({ appIsLoaded }), [appIsLoaded]);

  return (
    <AppLoadContext.Provider value={value}>{children}</AppLoadContext.Provider>
  );
};

const BenzoLoadProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const [benzoLoadProgress, setBenzoLoadProgress] = useState(0);

  const value = useMemo(
    () => ({ benzoLoadProgress, setBenzoLoadProgress }),
    [benzoLoadProgress]
  );

  return (
    <BenzoLoadContext.Provider value={value}>
      {children}
    </BenzoLoadContext.Provider>
  );
};

export const AppProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return (
    <DeviceProvider>
      <ViewportProvider>
        <AppLoadProvider>
          <SectionProvider>
            <ModalProvider>
              <BenzoLoadProvider>{children}</BenzoLoadProvider>
            </ModalProvider>
          </SectionProvider>
        </AppLoadProvider>
      </ViewportProvider>
    </DeviceProvider>
  );
};

export const useViewport = () => useContext(ViewportContext);
export const useDevice = () => useContext(DeviceContext);
export const useModal = () => useContext(ModalContext);
export const useSection = () => useContext(SectionContext);
export const useAppLoad = () => useContext(AppLoadContext);
export const useBenzoLoad = () => useContext(BenzoLoadContext);

/**
 * @deprecated Use targeted hooks instead: useViewport, useDevice, useModal,
 * useSection, useAppLoad, useBenzoLoad. This hook spreads all contexts into
 * a new object on every call, causing unnecessary re-renders in consumers.
 */
export const useApp = () => {
  return {
    ...useViewport(),
    ...useDevice(),
    ...useModal(),
    ...useSection(),
    ...useAppLoad(),
    ...useBenzoLoad(),
  };
};
