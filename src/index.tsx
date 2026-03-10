import { AppProvider } from "providers/AppProvider";
import ReactDOM from "react-dom/client";
import "utils/animation/gsapSetup";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <AppProvider>
      <App />
    </AppProvider>,
  );
} else {
  throw new Error("Root element not found");
}
