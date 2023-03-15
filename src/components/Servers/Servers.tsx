import "./Servers.scss";

import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaServer } from "react-icons/fa";

import data from "../../data/data";

const Servers = () => {
  const [server, setServer] = useState("Zero");

  return (
    <div className="servers mt-3 pt-3 border-top">
      <Row xs={1} lg={3} className="g-3">
        {data.servers.map(({ id, name }) => (
          <Col key={id}>
            <div
              className={`server ${
                server === name ? "active" : ""
              } text-center rounded border border-2 p-3`}
              onClick={() => setServer(name)}
            >
              <FaServer />
              <div className="name">{name}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Servers;
