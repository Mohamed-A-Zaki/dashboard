import Mainheading from "../components/Mainheading/Mainheading";
import { Col, Row } from "react-bootstrap";

type Props = {};

import data from "../data/data";
import Plan from "../sections/Plan/Plan";

const Plans = (props: Props) => {
  return (
    <div className="plans-page">
      <Mainheading>Plans</Mainheading>

      <Row xs={1} xl={2} className="g-3">
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
