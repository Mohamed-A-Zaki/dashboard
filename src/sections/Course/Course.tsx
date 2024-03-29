import "./Course.scss";
import { CourseProps } from "../../types/Course.types";

import { Card, Image } from "react-bootstrap";
import { FaUser, FaDollarSign } from "react-icons/fa";
import MainButton from "../../components/MainButton/MainButton";

const Course = (props: CourseProps) => {
  const { name, image, desc, students, price, instructor } = props;

  return (
    <Card className="course h-100">
      <Image
        src={instructor}
        alt="instructor-image"
        className="instructor position-absolute rounded-circle border border-2"
      />

      <Card.Img variant="top" src={image} alt={name} />

      <Card.Body>
        <Card.Title className="fw-semibold">{name}</Card.Title>
        <Card.Text className="fw-semibold text-black-50 my-3">{desc}</Card.Text>
      </Card.Body>

      <Card.Footer className="bg-white position-relative">
        <MainButton className="info-btn position-absolute top-0 start-50 translate-middle">
          course info
        </MainButton>
        <div className="d-flex align-items-center justify-content-between text-black-50 my-2">
          <div className="student-count d-flex align-items-center gap-1">
            <FaUser />
            {students}
          </div>
          <div className="price d-flex align-items-center">
            <FaDollarSign />
            {price}
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Course;
