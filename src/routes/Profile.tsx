import React from "react";
import Mainheading from "../components/Mainheading/Mainheading";
import PersonalInformation from "../sections/PersonalInformation/PersonalInformation";
import { Col, Row } from "react-bootstrap";
import Skills from "../sections/Skills/Skills";
import LatestActivites from "../sections/LatestActivites/LatestActivites";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="profile-page">
      <Mainheading>Profile</Mainheading>

      <PersonalInformation />

      <Row className="g-3">
        <Col xl={4}>
          <Skills />
        </Col>
        <Col xl={8}>
          <LatestActivites />
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
