import Plan from "../Plan/Plan";
import data from "../../data/data";
import { Col, Row } from "react-bootstrap";

const PlansList = () => {
  return (
    <Row xs={1} lg={2} xl={3} className="g-3">
      {data.plans.map((plan) => (
        <Col key={plan.id}>
          <Plan {...plan} />
        </Col>
      ))}
    </Row>
  );
};

export default PlansList;
