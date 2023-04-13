import { Col, Row } from "react-bootstrap";
import Friend from "../Friend/Friend";
import data from "../../data/data";

const FriendsList = () => {
  return (
    <Row xs={1} lg={2} xl={3} className="g-3">
      {data.friends.map((friend) => (
        <Col key={friend.id}>
          <Friend {...friend} />
        </Col>
      ))}
    </Row>
  );
};

export default FriendsList;
