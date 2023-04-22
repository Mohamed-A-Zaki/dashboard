import Feature from "../../components/Feature/Feature";
import { PlanFeatureProps } from "../../types/Plan.types";

type Props = {
  features: PlanFeatureProps[];
};

const FeaturesList = ({ features }: Props) => {
  return (
    <div className="features">
      {features.map((feature) => {
        return <Feature key={feature.id} {...feature} />;
      })}
    </div>
  );
};

export default FeaturesList;
