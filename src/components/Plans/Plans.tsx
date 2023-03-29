import data from "../../data/data";
import CustomFormCheck from "../CustomFormCheck/CustomFormCheck";

const Plans = () => {
  return (
    <div className="plans">
      {data.plans.map((item) => (
        <CustomFormCheck key={item.id} type="radio" name="plans" {...item} />
      ))}
    </div>
  );
};

export default Plans;
