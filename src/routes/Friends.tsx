import React from "react";
import { Col, Row } from "react-bootstrap";
import Mainheading from "../components/Mainheading/Mainheading";

import data from "../data/data"
import Friend from './../sections/Friend/Friend';

type Props = {};

const Friends = (props: Props) => {
  return (
    <div className="friends-page">
      <Mainheading>Friends</Mainheading>

      <Row xs={1} lg={2} xl={3} className="g-3">
        {data.friends.map((friend) => (
          <Col key={friend.id}>
            <Friend {...friend} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Friends;
