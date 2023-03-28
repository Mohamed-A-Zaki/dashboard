import "./Friend.scss";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Section from "../../components/Section/Section";
import MainButton from "../../components/MainButton/MainButton";

import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaRegSmile,
  FaCode,
  FaNewspaper,
} from "react-icons/fa";

type Props = {
  id: number;
  name: string;
  job: string;
  join_date: string;
  isVIP: boolean;
  image: string;
  stats: {
    friends: number;
    projects: number;
    articles: number;
  };
};

const Friend = (props: Props) => {
  let navigate = useNavigate();

  const {
    name,
    image,
    job,
    isVIP,
    join_date,
    stats: { friends, projects, articles },
  } = props;

  return (
    <Section className="friend position-relative">
      <div className="contact position-absolute">
        <FaPhoneAlt className="rounded-circle p-2 me-1" />
        <FaRegEnvelope className="rounded-circle p-2 me-1" />
      </div>

      <div className="info text-center my-3">
        <Image src={image} alt={name} className="rounded-circle mb-2" />
        <div className="name fw-bold">{name}</div>
        <div className="job text-black-50">{job}</div>
      </div>

      <div className="stats my-3 py-3 border-top border-bottom position-relative d-flex flex-column gap-2">
        <div className="d-flex align-items-center gap-2">
          <FaRegSmile />
          <span>{friends} Friends</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <FaCode />
          <span>{projects} Project</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <FaNewspaper />
          <span>{articles} Articles</span>
        </div>
        {isVIP && (
          <div className="vip position-absolute top-50 fs-1 translate-middle-y opacity-25 fw-bold">
            VIP
          </div>
        )}
      </div>

      <div className="join d-flex align-items-center justify-content-between">
        <span className="text-black-50">Joined {join_date}</span>
        <div className="d-flex gap-2">
          <MainButton onClick={() => navigate("/profile")}>Profile</MainButton>
          <MainButton className="remove">Remove</MainButton>
        </div>
      </div>
    </Section>
  );
};

export default Friend;
