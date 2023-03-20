import { Form } from "react-bootstrap";
import data from "../../data/data";

const Plans = () => {
  return (
    <div className="plans">
      {data.plans.map(({ id, name, isActive }) => (
        <Form.Check
          key={id}
          type="radio"
          label={name}
          name="plans"
          id={name.toLowerCase()}
          className="custom-form-check mt-3"
          defaultChecked={isActive}
        />
      ))}
    </div>
  );
};

export default Plans;
