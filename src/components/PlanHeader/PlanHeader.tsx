import "./PlanHeader.scss";

type Props = {
  name: string;
  price: string;
};

const PlanHeader = ({ name, price }: Props) => {
  return (
    <div className="plan-header text-center fw-semibold text-white p-3 border border-white border-3">
      <div className="name fs-4">{name}</div>
      <span className="price fs-1 position-relative d-inline-block">
        {price}
      </span>
    </div>
  );
};

export default PlanHeader;
