import "./MainButton.scss";
import { Button, ButtonProps } from "react-bootstrap";

const MainButton = ({ className = "", children, ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      variant=""
      className={`main_btn py-1 px-2 text-center text-white ${className}`}
    >
      {children}
    </Button>
  );
};

export default MainButton;
