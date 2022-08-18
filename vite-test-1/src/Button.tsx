// import Button from "lib/dist/button";
// import { Button } from "@infralabs/admin-utility-design-system";
import Button from "lib/dist/button";
import "./Button.css";
// import "lib/dist/button.css";

export default function Btn({ children, ...props }: any) {
  return <Button {...props}>{children}</Button>;
}
