import "./Activity.scss";
import { Image } from "react-bootstrap";

type Props = {
  name: string;
  desc: string;
  time: string;
  day: string;
  img: string;
};

const Activity = ({ name, desc, time, day, img }: Props) => {
  return (
    <div className="activity border-bottom py-3 d-flex gap-3 align-items-center flex-column flex-md-row text-center text-md-start">
      <Image src={img} alt={name} />

      <div className="flex-grow-1">
        <div className="name fw-semibold">{name}</div>
        <div className="desc text-black-50">{desc}</div>
      </div>

      <div>
        <div className="time">{time}</div>
        <div className="day text-black-50">{day}</div>
      </div>
    </div>
  );
};

export default Activity;
