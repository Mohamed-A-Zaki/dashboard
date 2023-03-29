import "./CustomFormCheck.scss";
import { Form, FormCheckProps } from "react-bootstrap";

const CustomFormCheck = (props: FormCheckProps) => {
  return <Form.Check {...props} className="custom-form-check mt-3" />;
};

export default CustomFormCheck;
