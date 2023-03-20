import "./CustomFormChech.scss";
import { Form } from "react-bootstrap";

type Props = {
  id: number;
  name: string;
  isActive: boolean;
  type: "radio" | "checkbox";
};

const CustomFormChech = ({ type, id, name, isActive }: Props) => {
  return (
    <Form.Check
      key={id}
      type={type}
      label={name}
      name={type === "radio" ? "plans" : "widgets"}
      className="custom-form-check mt-3"
      id={name.toString().toLowerCase()}
      defaultChecked={isActive}
    />
  );
};

export default CustomFormChech;
