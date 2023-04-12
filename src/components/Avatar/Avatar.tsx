import "./Avatar.scss";
import avatar from "../../assets/avatar.png";
import { AiFillStar } from "react-icons/ai";
import { Image, ProgressBar } from "react-bootstrap";

const Avatar = () => {
  return (
    <div className="avatar text-center p-3">
      <Image
        src={avatar}
        alt="avatar"
        className="img-thumbnail rounded-circle"
      />

      <h4 className="name my-3">Osama Elzero</h4>
      <div className="level text-black-50 my-3">Level 20</div>
      <ProgressBar now={60} className="m-auto" />

      <div className="rating">
        <div className="stars my-3">
          {[...Array(5)].map((_, indx) => (
            <AiFillStar key={indx} />
          ))}
        </div>
        <span className="text-black-50 fw-semibold">550 Rating</span>
      </div>
    </div>
  );
};

export default Avatar;
