import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import App from "./App01";
import App from "./App02";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
