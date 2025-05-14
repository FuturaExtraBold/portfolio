import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "providers/AppProvider";
import "utils/animation/gsapSetup";
import { ENV } from "@pixi/constants";
import { settings } from "@pixi/settings";

(settings as any).PREFER_ENV = ENV.WEBGL;

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AppProvider />
    </StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
