import { Col, Row } from "react-bootstrap";

import Tickets from "../sections/Tickets/Tickets";
import Welcome from "../sections/Welcome/Welcome";
import QuickDraft from "../sections/QuickDraft/QuickDraft";
import Mainheading from "../components/Mainheading/Mainheading";
import YearlyTargets from "./../sections/YearlyTargets/YearlyTargets";

const Dashboard = () => {
  const sections = [
    { id: 1, Section: Welcome },
    { id: 2, Section: QuickDraft },
    { id: 3, Section: YearlyTargets },
    { id: 4, Section: Tickets },
  ];

  return (
    <div className="dashboard-page">
      <Mainheading>Dashboard</Mainheading>
      <Row xs={1} xl={2} className="g-3">
        {sections.map(({ id, Section }) => (
          <Col key={id}>{<Section />}</Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
