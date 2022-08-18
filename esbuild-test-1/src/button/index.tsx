import React, { version } from "react";
import Button from "antd/es/button";
import "./style.less";
// import "./style.css.js";

console.log("🚀 ~ file: button/index.tsx ~ line 2 ~ version", version);

const Btn = ({ children, ...props }: { children: string }) => {
  return <Button {...props}>{children}</Button>;
};

export default Btn;
