import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App01";
//import App from "./App02";
//import App from "./App03";
//import App from "./App04";
//import App from "./App05";
//import App from "./App06";
//import App from "./App07";
//import App from "./App08";
//import App from "./App09";
//import App from "./App10";
//import App from "./App11";
//import App from "./App12";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
