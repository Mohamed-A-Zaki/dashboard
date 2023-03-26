import "./CustomFormChech.scss";
import { Form } from "react-bootstrap";

type Props = {
  label: string;
  name: string;
  isActive: boolean;
  type: "radio" | "checkbox";
};

const CustomFormChech = ({ type, label, name, isActive }: Props) => {
  return (
    <Form.Check
      type={type}
      label={label}
      name={name}
      className="custom-form-check mt-3"
      id={label.toString().toLowerCase()}
      defaultChecked={isActive}
    />
  );
};

export default CustomFormChech;
