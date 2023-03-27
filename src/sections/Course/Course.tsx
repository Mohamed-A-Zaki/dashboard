import "./Course.scss";
import { Card, Image } from "react-bootstrap";
import { FaUser, FaDollarSign } from "react-icons/fa";

type Props = {
  name: string;
  desc: string;
  students: number;
  price: number;
  instructor: string;
  image: string;
};

const Course = ({ name, image, desc, students, price, instructor }: Props) => {
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
        <span className="info-btn main_btn position-absolute top-0 start-50 translate-middle">
          course info
        </span>
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
