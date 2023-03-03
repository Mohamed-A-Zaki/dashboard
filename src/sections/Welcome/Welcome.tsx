import "./Welcome.scss";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import avatar from "../../assets/avatar.png";
import welcome from "../../assets/welcome.png";

import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";

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
        <div>
          Osama Elzero
          <span className="text-black-50 d-block mt-2">Developer</span>
        </div>
        <div>
          80
          <span className="text-black-50 d-block mt-2">Projects</span>
        </div>
        <div>
          $8500
          <span className="text-black-50 d-block mt-2">Earned</span>
        </div>
      </div>

      <Link to="/profile" className="btn m-3 d-block text-white">
        Profile
      </Link>
    </Section>
  );
};

export default Welcome;
