import "./Feature.scss";
import { BiCheck } from "react-icons/bi";
import { IconContext } from "react-icons";
import { VscClose } from "react-icons/vsc";
import { IoMdInformationCircle } from "react-icons/io";

export type FeatureProps = {
  id: number;
  name: string;
  isActive: boolean;
};

const Feature = ({ name, isActive }: FeatureProps) => {
  return (
    <div className="feature d-flex align-items-center justify-content-between py-3 gap-2 border-bottom">
      <IconContext.Provider
        value={{
          size: "25",
          className: `${isActive ? "active" : "not-active"}`,
        }}
      >
        {isActive ? <BiCheck /> : <VscClose />}
      </IconContext.Provider>
      <span className="flex-grow-1">{name}</span>
      <IoMdInformationCircle size={20} className="help text-secondary" />
    </div>
  );
};

export default Feature;
