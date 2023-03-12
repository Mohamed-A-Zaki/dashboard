import { Col, Row } from "react-bootstrap";

import Tickets from "../sections/Tickets/Tickets";
import Welcome from "../sections/Welcome/Welcome";
import QuickDraft from "../sections/QuickDraft/QuickDraft";
import Mainheading from "../components/Mainheading/Mainheading";
import YearlyTargets from "./../sections/YearlyTargets/YearlyTargets";
import LatestNews from "./../sections/LatestNews/LatestNews";
import LatestTasks from "../sections/LatestTasks/LatestTasks";
import TopSearchItems from "../sections/TopSearchItems/TopSearchItems";
import LatestUploads from "../sections/LatestUploads/LatestUploads";
import LastProject from "../sections/LastProject/LastProject";
import Reminders from "../sections/Reminders/Reminders";
import LastPost from "../sections/LastPost/LastPost";
import SocialMedia from "../sections/SocialMedia/SocialMedia";
import ProjectsTable from "../sections/ProjectsTable/ProjectsTable";

const Dashboard = () => {
  const sections = [
    { id: 1, Section: Welcome },
    { id: 2, Section: QuickDraft },
    { id: 3, Section: YearlyTargets },
    { id: 4, Section: Tickets },
    { id: 5, Section: LatestNews },
    { id: 6, Section: LatestTasks },
    { id: 7, Section: TopSearchItems },
    { id: 8, Section: LatestUploads },
    { id: 9, Section: LastProject },
    { id: 10, Section: Reminders },
    { id: 11, Section: LastPost },
    { id: 12, Section: SocialMedia },
  ];

  return (
    <div className="dashboard-page">
      <Mainheading>Dashboard</Mainheading>

      <Row xs={1} xl={2} className="g-3">
        {sections.map(({ id, Section }) => (
          <Col key={id}>{<Section />}</Col>
        ))}
      </Row>

      <ProjectsTable />
    </div>
  );
};

export default Dashboard;
