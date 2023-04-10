import { Col, Row } from "react-bootstrap";

import Plan from "../sections/Plan/Plan";
import Mainheading from "../components/Mainheading/Mainheading";

import data from "../data/data";

const Plans = () => {
  return (
    <div className="plans-page">
      <Mainheading>Plans</Mainheading>

      <Row xs={1} lg={2} xl={3} className="g-3">
        {data.plans.map((plan) => (
          <Col key={plan.id}>
            <Plan {...plan} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Plans;
