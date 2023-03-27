import { Col, Row } from "react-bootstrap";
import Course from "../sections/Course/Course";
import Mainheading from "../components/Mainheading/Mainheading";

import data from "../data/data";

const Courses = () => {
  return (
    <div className="courses-page">
      <Mainheading>Courses</Mainheading>

      <Row xs={1} lg={2} xl={3} className="g-3">
        {data.courses.map((course) => (
          <Col key={course.id}>
            <Course {...course} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Courses;
