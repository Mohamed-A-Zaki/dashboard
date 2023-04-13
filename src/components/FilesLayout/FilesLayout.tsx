import { Col, Row } from "react-bootstrap";
import FilesList from "../../sections/FilesList/FilesList";
import FilesStats from "../../sections/FilesStats/FilesStats";

const FilesLayout = () => {
  return (
    <Row className="flex-column-reverse flex-lg-row g-3">
      <Col lg={8}>
        <FilesList />
      </Col>
      <Col lg={4}>
        <FilesStats />
      </Col>
    </Row>
  );
};

export default FilesLayout;
