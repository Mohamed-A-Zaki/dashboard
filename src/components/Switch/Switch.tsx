import "./Switch.scss";
import { Form, FormCheckProps } from "react-bootstrap";

const Switch = (props: FormCheckProps) => {
  return (
    <Form.Check type="switch" className="fs-4" aria-label="switch" {...props} />
  );
};

export default Switch;
