import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

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
