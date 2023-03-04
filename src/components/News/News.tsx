import "./News.scss";
import { Badge, Image } from "react-bootstrap";

type Props = {
  title: string;
  description: string;
  date: string;
  img: string;
};

const News = ({ title, description, date, img }: Props) => {
  return (
    <div className="news d-flex flex-column flex-md-row gap-3 align-items-center pb-3 mt-3">
      <Image src={img} className="rounded" alt={title} />
      <div className="content text-center">
        <div className="title fw-bold">{title}</div>
        <div className="description text-black-50">{description}</div>
      </div>
      <Badge bg="" className="date fw-semibold text-dark">
        {date}
      </Badge>
    </div>
  );
};

export default News;
