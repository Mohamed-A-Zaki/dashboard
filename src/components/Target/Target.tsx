import "./Target.scss";
import { IconType } from "react-icons";
import { Badge, ProgressBar } from "react-bootstrap";

type Props = {
  title: string;
  count: string;
  persentage: number;
  Icon: IconType;
};

const Target = ({ title, count, persentage, Icon }: Props) => {
  return (
    <div className={`target ${title.toLowerCase()} d-flex gap-2 mt-3`}>
      <div className="icon p-4 d-flex align-items-center justify-content-center fs-4">
        <Icon />
      </div>
      <div className="details flex-grow-1 position-relative">
        <div className="title text-black-50">{title}</div>
        <div className="count fw-bold my-2">{count}</div>
        <ProgressBar now={persentage} className="position-relative" />
        <Badge
          className="persentage position-absolute translate-middle-x"
          style={{ insetInlineStart: `${persentage}%` }}
        >
          {persentage}%
        </Badge>
      </div>
    </div>
  );
};

export default Target;
