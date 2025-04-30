import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const setupMocks = async () => {
  const { worker } = await import("./mocks");
  return worker.start();
};

// Try to find root element - CodeSandbox may use different ID
const rootElement =
  document.getElementById("root") ||
  document.getElementById("app-root") ||
  document.body;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

setupMocks().then(() => {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
