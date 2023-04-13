import { Col, Row } from "react-bootstrap";
import File from "../../components/File/File";

import data from "../../data/data";

const FilesSec = () => {
  return (
    <Row xs={1} md={2} xl={3} xxl={4} className="g-3">
      {data.files.map((file) => (
        <Col key={file.id}>
          <File {...file} />
        </Col>
      ))}
    </Row>
  );
};

export default FilesSec;
