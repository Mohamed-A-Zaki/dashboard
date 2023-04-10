import { Col, Row } from "react-bootstrap";

import FilesSec from "../sections/FilesSec/FilesSec";
import FilesStats from "../sections/FilesStats/FilesStats";
import Mainheading from "../components/Mainheading/Mainheading";

const Files = () => {
  return (
    <div className="files-page">
      <Mainheading>Files</Mainheading>

      <Row className="flex-column-reverse flex-lg-row g-3">
        <Col lg={8}>
          <FilesSec />
        </Col>

        <Col lg={4}>
          <FilesStats />
        </Col>
      </Row>
    </div>
  );
};

export default Files;
