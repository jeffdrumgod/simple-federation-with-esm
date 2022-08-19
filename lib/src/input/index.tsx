import React from "react";
import Input, { InputProps } from "antd/es/input";
// import "./style.less";

const Inp = (props: InputProps) => {
  const x = (x) => {
    return x + 1;
  };
  return <Input {...props} onFocus={x} />;
};

export default Inp;
