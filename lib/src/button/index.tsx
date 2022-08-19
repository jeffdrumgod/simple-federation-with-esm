import React, { version } from "react";
import Button, { ButtonProps } from "antd/es/button";
// import "./style.less";
import style from "./style.module.less";
// import "./style.css";
// import "./style.css.js";

console.log("🚀 ~ file: button/index.tsx ~ line 8 ~ version", version);

const Btn = (props: ButtonProps) => {
  const { children, ...extrProps } = props;
  return (
    <div className={style.buttonCustom}>
      <Button {...extrProps}>{children}</Button>
    </div>
  );
};

export default Btn;
