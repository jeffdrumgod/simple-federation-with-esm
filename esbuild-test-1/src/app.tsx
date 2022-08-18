import React from "react";
import ReactDOM from "react-dom/client";

import "./app.less";

// import * as Server from "react-dom/server";
// import Button from "./button";

let Greet = ({ children }) => (
  <>
    <h1>Hello world!</h1>
    {children}
  </>
);

const render = ({ container: Container }) => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <Greet>
      <Container />
    </Greet>
  );
};

// console.log(Server.renderToString(<Greet />));

export default render;
