import "./Switch.scss";
import { useState } from "react";
import { Form } from "react-bootstrap";

const Switch = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <Form.Check
      type="switch"
      className="fs-4"
      aria-label="switch"
      checked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
    />
  );
};

export default Switch;
