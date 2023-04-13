import Avatar from "../../components/Avatar/Avatar";
import Section from "../../components/Section/Section";
import Information from "../../components/Information/Information";
import { Col, Row } from "react-bootstrap";

const PersonalInformation = () => {
  return (
    <Section className="personal-information mb-3">
      <Row className="align-items-center g-3 g-lg-0">
        <Col lg={3}>
          <Avatar />
        </Col>
        <Col lg={9}>
          <Information />
        </Col>
      </Row>
    </Section>
  );
};

export default PersonalInformation;
