// import Button from "lib/dist/button";
// import { Button } from "@infralabs/admin-utility-design-system";
// import Button from "lib/dist/button";
import styles from "./styles.module.css";

const Btn = ({ children }: any) => {
  return (
    <>
      <button className={`btn-default ${styles.test}`}>{children}</button>
      <p>TESTE</p>
    </>
  );
};

export default Btn;
