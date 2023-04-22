import "./File.scss";
import { FileProps } from "../../types/File.types";

import { Card } from "react-bootstrap";
import { MdDownload } from "react-icons/md";

const File = ({ name, image, person, date, size }: FileProps) => {
  return (
    <Card className="file p-2 border-0">
      <MdDownload size={20} className="text-black-50" />
      <Card.Img src={image} className="m-auto" alt={name} />

      <Card.Body>
        <Card.Title className="file-name text-center mb-3">{name}</Card.Title>
        <Card.Text className="text-black-50 fw-semibold">{person}</Card.Text>
      </Card.Body>

      <Card.Footer className="d-flex align-items-center justify-content-between bg-white text-black-50 fw-semibold">
        <div className="date">{date}</div>
        <div className="size">{size}</div>
      </Card.Footer>
    </Card>
  );
};

export default File;
