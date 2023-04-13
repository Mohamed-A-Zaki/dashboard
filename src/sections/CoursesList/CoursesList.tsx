import { Col, Row } from "react-bootstrap";
import Course from "../Course/Course";
import data from "../../data/data";

const CoursesList = () => {
  return (
    <Row xs={1} lg={2} xl={3} xxl={4} className="g-3">
      {data.courses.map((course) => (
        <Col key={course.id}>
          <Course {...course} />
        </Col>
      ))}
    </Row>
  );
};

export default CoursesList;
