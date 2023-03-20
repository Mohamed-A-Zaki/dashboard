import "./Switch.scss";
import { Form } from "react-bootstrap";

const Switch = () => {
  return (
    <Form.Check
      type="switch"
      className="fs-4"
      aria-label="switch"
      defaultChecked={true}
    />
  );
};

export default Switch;
