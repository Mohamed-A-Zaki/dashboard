import "./InformationItem.scss";
import Switch from "../Switch/Switch";

type Props = {
  title: string;
  content: any;
  isActive: boolean;
};

const InformationItem = ({ title, content, isActive }: Props) => {
  return (
    <div className="information-item p-3 border-bottom rounded">
      <div className="title text-black-50 fw-semibold">{title}</div>

      <div className="d-flex flex-column flex-lg-row gap-3 gap-xl-5 my-2">
        {Object.keys(content).map((ele, indx) => (
          <div key={indx} className="d-flex gap-1">
            <span className="text-black-50 fw-semibold">{ele} :</span>
            <span>{content[ele]}</span>
          </div>
        ))}
      </div>

      <Switch defaultChecked={isActive} />
    </div>
  );
};

export default InformationItem;
