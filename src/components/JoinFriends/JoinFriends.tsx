import "./JoinFriends.scss";
import { useNavigate } from "react-router-dom";
import MainButton from "../MainButton/MainButton";

type Props = {
  join_date: string;
};

const JoinFriends = ({ join_date }: Props) => {
  let navigate = useNavigate();

  return (
    <div className="join-friends d-flex align-items-center justify-content-between">
      <span className="text-black-50">Joined {join_date}</span>
      <div className="d-flex gap-2">
        <MainButton onClick={() => navigate("/profile")}>Profile</MainButton>
        <MainButton className="remove">Remove</MainButton>
      </div>
    </div>
  );
};

export default JoinFriends;
