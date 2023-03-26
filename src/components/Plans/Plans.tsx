import data from "../../data/data";
import CustomFormChech from "../CustomFormChech/CustomFormChech";

const Plans = () => {
  return (
    <div className="plans">
      {data.plans.map((item) => (
        <CustomFormChech key={item.id} type="radio" name="plans" {...item} />
      ))}
    </div>
  );
};

export default Plans;
