import data from "../../data/data";
import CustomFormCheck from "../CustomFormCheck/CustomFormCheck";

const Times = () => {
  return (
    <div className="Times">
      {data.times.map((item) => (
        <CustomFormCheck key={item.id} type="radio" name="times" {...item} />
      ))}
    </div>
  );
};

export default Times;
