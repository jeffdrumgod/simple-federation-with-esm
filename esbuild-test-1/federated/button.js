import {
  button_default
} from "http://localhost:8080/chunk-Z62SQ2KL.js";
import "http://localhost:8080/chunk-LUKHBBNA.js";

// src/button/index.tsx
import React, { version } from "react";

// src/button/style.module.less
var _default = {};

// src/button/index.tsx
console.log("\u{1F680} ~ file: button/index.tsx ~ line 2 ~ version", version);
var Btn = ({ children, ...props }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: _default.buttonCustom
  }, /* @__PURE__ */ React.createElement(button_default, {
    ...props
  }, children));
};
var button_default2 = Btn;
export {
  button_default2 as default
};
