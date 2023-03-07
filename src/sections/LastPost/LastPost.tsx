import { Card } from "react-bootstrap";
import { FiHeart } from "react-icons/fi";
import { FaRegComments } from "react-icons/fa";

import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

import avatar from "../../assets/avatar.png";

const LastPost = () => {
  return (
    <Section className="last-post">
      <SectionHeading>
        <SectionTitle>Latest Post</SectionTitle>
      </SectionHeading>

      <Card className="border-0">
        <Card.Header className="d-flex align-items-center gap-3 bg-white p-3">
          <img
            className="p-1 bg-white border rounded-circle"
            style={{ width: 50 }}
            src={avatar}
            alt="avatar"
          />
          <div className="desc">
            <div className="name fw-bold">Osama Elzero</div>
            <div className="time text-black-50 fw-semibold">
              About 3 Hours Ago
            </div>
          </div>
        </Card.Header>

        <Card.Body>
          <Card.Text>
            You Can Fool All Of The People Some Of The Time, And Some Of The
            People All Of The Time, But You Can't Fool All Of The People All Of
            The Time.
          </Card.Text>
          <Card.Text>
            You Can Fool All Of The People Some Of The Time, And Some Of The
            People All Of The Time.
          </Card.Text>
        </Card.Body>

        <Card.Footer className="bg-white p-3 text-black-50 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-1">
            <FiHeart />
            <span>1.8K</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <FaRegComments />
            <span>500</span>
          </div>
        </Card.Footer>
      </Card>
    </Section>
  );
};

export default LastPost;
