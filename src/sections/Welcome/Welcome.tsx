import "./Welcome.scss";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";

import data from "../../data/data";
import avatar from "../../assets/avatar.png";
import welcome from "../../assets/welcome.png";

const Welcome = () => {
  return (
    <Section className="welcome overflow-hidden">
      <div className="intro d-flex justify-content-between p-3 position-relative">
        <SectionHeading>
          <SectionTitle>Welcome</SectionTitle>
          <SectionSubTitle>Elzero</SectionSubTitle>
        </SectionHeading>
        <Image src={welcome} alt="welcome" className="welcome-image" />
        <Image
          src={avatar}
          alt="avatar"
          className="avatar-image position-absolute top-100 img-thumbnail rounded-circle translate-middle-y"
        />
      </div>

      <div className="info d-flex justify-content-around py-4 my-4 border-top border-bottom text-center">
        {data.welcome_info.map(({ id, label, value }) => (
          <div className="item" key={id}>
            <span className="fw-semibold">{value}</span>
            <span className="text-black-50 d-block mt-2">{label}</span>
          </div>
        ))}
      </div>

      <Link
        to="/profile"
        className="main_btn text-decoration-none my-3 d-block"
      >
        Profile
      </Link>
    </Section>
  );
};

export default Welcome;
