import { Col, Row } from "react-bootstrap";
import Mainheading from "../components/Mainheading/Mainheading";
import QuickDraft from "../sections/QuickDraft/QuickDraft";
import Welcome from "../sections/Welcome/Welcome";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Mainheading>Dashboard</Mainheading>
      <Row xs={1} xl={2} className="g-3">
        <Col>
          <Welcome />
        </Col>
        <Col>
          <QuickDraft />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
