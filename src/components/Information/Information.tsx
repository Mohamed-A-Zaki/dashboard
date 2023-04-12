import data from "../../data/data";
import InformationItem from "../InformationItem/InformationItem";

const Information = () => {
  return (
    <div className="information">
      {data.information.map((item) => {
        return <InformationItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Information;
