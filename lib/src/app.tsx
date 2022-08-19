import React from "react";
import Input from "./input";
import Button from "./button";

import "./app.less";

// import * as Server from "react-dom/server";
// import Button from "./button/index.mjs";

const App = ({ children }: { children? }) => (
  <>
    <h1>Hello, esbuild!</h1>
    {children}
    <Button>teste</Button>
    <Input />
  </>
);

export default App;
