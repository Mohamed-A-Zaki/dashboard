import "./SecurityInfo.scss";

import Switch from "../../components/Switch/Switch";
import Section from "../../components/Section/Section";
import MainButton from "../../components/MainButton/MainButton";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";

const SecurityInfo = () => {
  return (
    <Section className="security-info">
      <SectionHeading>
        <SectionTitle>Security Info</SectionTitle>
        <SectionSubTitle>
          Security Information About Your Account
        </SectionSubTitle>
      </SectionHeading>

      <div className="content">
        <div className="password d-flex align-items-center justify-content-between pb-3 mt-3 border-bottom">
          <div>
            <div className="title">Password</div>
            <div className="sub-title text-black-50">
              Last Change On 25/10/2021
            </div>
          </div>
          <MainButton>Change</MainButton>
        </div>

        <div className="two-factors d-flex align-items-center justify-content-between pb-3 mt-3 border-bottom">
          <div>
            <div className="title">Two-Factor Authentication</div>
            <div className="sub-title text-black-50">
              Enable/Disable The Feature
            </div>
          </div>
          <Switch />
        </div>

        <div className="devices d-flex align-items-center justify-content-between pb-3 mt-3">
          <div>
            <div className="title">Devices</div>
            <div className="sub-title text-black-50">
              Check The Login Devices List
            </div>
          </div>
          <MainButton className="">Device</MainButton>
        </div>
      </div>
    </Section>
  );
};

export default SecurityInfo;
