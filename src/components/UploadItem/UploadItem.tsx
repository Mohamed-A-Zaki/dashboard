import "./UploadItem.scss";
import { Badge, Image } from "react-bootstrap";

type Props = {
  file_name: string;
  person: string;
  size: string;
  img: string;
};

const UploadItem = ({ file_name, person, size, img }: Props) => {
  return (
    <div className="upload-item d-flex align-items-center gap-3 pb-2 mt-2">
      <Image src={img} alt={file_name} />
      <div className="details flex-grow-1">
        <div className="name">{file_name}</div>
        <div className="person">{person}</div>
      </div>
      <Badge bg="" className="size text-dark">
        {size}
      </Badge>
    </div>
  );
};

export default UploadItem;
