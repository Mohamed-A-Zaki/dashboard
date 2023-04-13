import Feature, { FeatureProps } from "../../components/Feature/Feature";

type Props = {
  features: FeatureProps[];
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
