import { Col, Row } from "react-bootstrap";
import Project from "../sections/Project/Project";
import Mainheading from "../components/Mainheading/Mainheading";

import data from "../data/data";

const Projects = () => {
  return (
    <div className="projects-page">
      <Mainheading>Projects</Mainheading>

      <Row xs={1} xl={2} xxl={3} className="g-3">
        {data.projects.map((project) => (
          <Col key={project.id}>
            <Project {...project} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
