import "./Plan.scss";

import Section from "../../components/Section/Section";
import FeaturesList from "../FeaturesList/FeaturesList";
import JoinPlan from "../../components/JoinPlan/JoinPlan";
import PlanHeader from "../../components/PlanHeader/PlanHeader";

import { FeatureProps } from "../../components/Feature/Feature";

type PlanProps = {
  name: string;
  price: string;
  features: FeatureProps[];
  joined: boolean;
};

const Plan = ({ name, price, joined, features }: PlanProps) => {
  return (
    <Section className={`plan ${name}`}>
      <PlanHeader name={name} price={price} />
      <FeaturesList features={features} />
      <JoinPlan joined={joined} />
    </Section>
  );
};

export default Plan;
