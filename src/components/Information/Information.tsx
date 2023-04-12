import "./Information.scss";
import data from "../../data/data";
import Switch from "../Switch/Switch";

const Information = () => {
  return (
    <div className="information">
      {data.information.map(({ id, title, isActive, content }) => {
        return (
          <div className="item p-3 border-bottom rounded" key={id}>
            <div className="title text-black-50 fw-semibold">{title}</div>

            <div className="d-flex flex-column flex-lg-row gap-3 gap-xl-5 my-2">
              {Object.keys(content).map((ele, indx) => (
                <div key={indx} className="d-flex gap-1">
                  <span className="text-black-50 fw-semibold">{ele} :</span>
                  <span>{(content as any)[ele]}</span>
                </div>
              ))}
            </div>

            <Switch defaultChecked={isActive} />
          </div>
        );
      })}
    </div>
  );
};

export default Information;
