import React, { version } from "react";
import Button from "antd/es/button";
// import "./style.less";
// import style from "./style.module.less";
// import "./style.css";
// import "./style.css.js";

console.log("🚀 ~ file: button/index.tsx ~ line 8 ~ version", version);

const Btn = ({ children, ...props }: { children: string }) => {
  return (
    <div>
      <Button {...props}>{children}</Button>
    </div>
  );
};

export default Btn;
