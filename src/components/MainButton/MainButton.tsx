import React from "react";
import "./MainButton.scss";
import { Button } from "react-bootstrap";

type Props = {
  children: string;
} & Omit<React.ComponentProps<typeof Button>, "children">;

const MainButton = ({ className = "", children, ...rest }: Props) => {
  return (
    <Button
      variant=""
      className={`main_btn py-1 px-2 text-center text-white ${className}`}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default MainButton;
