import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Button";
import Input from "./Input";
import App from "./App";
import "./index.css";

export { Button, Input };

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
