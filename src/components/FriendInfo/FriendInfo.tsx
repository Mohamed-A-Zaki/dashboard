import "./FriendInfo.scss";
import { Image } from "react-bootstrap";

type Props = {
  name: string;
  job: string;
  image: string;
};

const FriendInfo = ({ name, job, image }: Props) => {
  return (
    <div className="friend-info text-center my-3">
      <Image src={image} alt={name} className="rounded-circle mb-2" />
      <div className="name fw-bold">{name}</div>
      <div className="job text-black-50">{job}</div>
    </div>
  );
};

export default FriendInfo;
