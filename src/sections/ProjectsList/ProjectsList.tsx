import { Col, Row } from "react-bootstrap";
import Project from "../Project/Project";
import data from "../../data/data";

const ProjectsList = () => {
  return (
    <Row xs={1} xl={2} xxl={3} className="g-3">
      {data.projects.map((project) => (
        <Col key={project.id}>
          <Project {...project} />
        </Col>
      ))}
    </Row>
  );
};

export default ProjectsList;
