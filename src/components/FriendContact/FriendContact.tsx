import "./FriendContact.scss";
import { IconContext } from "react-icons";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

const FriendContact = () => {
  return (
    <div className="friend-contact position-absolute">
      <IconContext.Provider
        value={{ size: "30px", className: "rounded p-2 me-1" }}
      >
        <FaPhoneAlt />
        <FaRegEnvelope />
      </IconContext.Provider>
    </div>
  );
};

export default FriendContact;
