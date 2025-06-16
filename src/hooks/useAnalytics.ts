import { useCallback } from "react";

type EventParams = {
  name: string;
  category?: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  const trackEvent = useCallback(
    ({ name, category = "engagement", label, value }: EventParams) => {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", name, {
          event_category: category,
          event_label: label,
          value,
        });
      }
    },
    []
  );

  return { trackEvent };
};
