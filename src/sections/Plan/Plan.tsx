import "./Plan.scss";

import Section from "../../components/Section/Section";
import MainButton from "../../components/MainButton/MainButton";

import { BiCheck } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";
import { IoMdInformationCircle } from "react-icons/io";

type Feature = {
  id: number;
  name: string;
  isActive: boolean;
};

type Props = {
  name: string;
  price: string;
  features: Feature[];
  joined: boolean;
};

const Plan = ({ name, price, joined, features }: Props) => {
  return (
    <Section className={`plan ${name}`}>
      <div className="plan-header text-center fw-semibold text-white p-3 border border-white border-3">
        <div className="name fs-4">{name}</div>
        <span className="price fs-1 position-relative d-inline-block">{price}</span>
      </div>

      <div className="features">
        {features.map(({ id, name, isActive }) => {
          return (
            <div
              className="feature d-flex align-items-center justify-content-between py-3 border-bottom"
              key={id}
            >
              <div className={`${isActive ? "active" : "not-active"}`}>
                {isActive ? (
                  <BiCheck className="fs-4" />
                ) : (
                  <VscClose className="fs-4" />
                )}
                <span>{name}</span>
              </div>
              <IoMdInformationCircle className="fs-5 text-secondary" />
            </div>
          );
        })}
      </div>

      <div className="join mt-3">
        {joined ? (
          <div className="current-plan text-center fw-semibold">
            This Is Your Current Plan
          </div>
        ) : (
          <MainButton>Join</MainButton>
        )}
      </div>
    </Section>
  );
};

export default Plan;
