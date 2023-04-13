import React from "react";
import { Col, Row } from "react-bootstrap";
import Skills from "../../sections/Skills/Skills";
import LatestActivites from "../../sections/LatestActivites/LatestActivites";
import PersonalInformation from "../../sections/PersonalInformation/PersonalInformation";

const ProfileLayout = () => {
  return (
    <React.Fragment>
      <PersonalInformation />
      <Row className="g-3">
        <Col xl={4}>
          <Skills />
        </Col>
        <Col xl={8}>
          <LatestActivites />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProfileLayout;
