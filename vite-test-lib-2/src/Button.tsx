// import Button from "lib/dist/button";
// import { Button } from "@infralabs/admin-utility-design-system";
// import Button from "lib/dist/button";

const Btn = ({ children }: any) => {
  return (
    <>
      <button className="btn-default">{children}</button>
      <p>TESTE</p>
    </>
  );
};

export { Btn as Button };

export default Btn;
