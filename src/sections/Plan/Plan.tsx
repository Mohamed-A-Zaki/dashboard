import "./Plan.scss";
import { PlanProps } from "../../types/Plan.types";

import Section from "../../components/Section/Section";
import FeaturesList from "../FeaturesList/FeaturesList";
import JoinPlan from "../../components/JoinPlan/JoinPlan";
import PlanHeader from "../../components/PlanHeader/PlanHeader";

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
