import "./SocialMediaItem.scss";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

type Props = {
  text: string;
  label: string;
  type: string;
  Icon: IconType;
};

const SocialMediaItem = ({ text, label, type, Icon }: Props) => {
  return (
    <div className={`social-item my-3 d-flex align-items-center gap-3 rounded ${type}`}>
      <div className="icon text-white d-flex align-items-center justify-content-center">
        <Icon className="fs-2" />
      </div>
      <div className="text">{text}</div>
      <Link
        to="#"
        className="text-decoration-none text-white py-1 px-2 text-center rounded"
      >
        {label}
      </Link>
    </div>
  );
};

export default SocialMediaItem;
