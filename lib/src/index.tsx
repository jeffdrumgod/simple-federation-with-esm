import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";

import "./index.less";

const root = document.getElementById("root") as HTMLElement;

if (root) {
  ReactDOM.createRoot(root).render(<App />);
} else {
  console.warn("Root element not found");
}
