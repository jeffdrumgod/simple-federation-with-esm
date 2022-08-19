import Button, { ButtonProps } from "antd/es/button";
// import "./style.less";
import style from "./style.module.less";
// import "./style.css";
// import "./style.css.js";

const Btn = (props: ButtonProps) => {
  const { children, ...extrProps } = props;
  return (
    <div className={style.buttonCustom}>
      <Button {...extrProps}>{children}</Button>
    </div>
  );
};

export default Btn;
