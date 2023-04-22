export type PlanFeatureProps = {
  id: number;
  name: string;
  isActive: boolean;
};

export type PlanProps = {
  name: string;
  price: string;
  joined: boolean;
  features: PlanFeatureProps[];
};
