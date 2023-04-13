import "./SocialMediaItem.scss";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import MainButton from "../MainButton/MainButton";

type Props = {
  text: string;
  label: string;
  type: string;
  Icon: IconType;
};

const SocialMediaItem = ({ text, label, type, Icon }: Props) => {
  let navigate = useNavigate();

  return (
    <div
      className={`social-item my-3 d-flex align-items-center gap-3 rounded ${type}`}
    >
      <Icon size={60} className="icon p-3 text-white" />
      <div className="text">{text}</div>
      <MainButton onClick={() => navigate("#")}>{label}</MainButton>
    </div>
  );
};

export default SocialMediaItem;
