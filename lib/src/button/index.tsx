import Button, { ButtonProps } from "antd/es/button";
import style from "./style.module.less";

const Btn = (props: ButtonProps) => {
  const { children, ...extrProps } = props;
  return (
    <div className={style.buttonCustom}>
      <Button {...extrProps}>{children}</Button>
    </div>
  );
};

export default Btn;
