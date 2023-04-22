import "./FriendStats.scss";
import { IconContext } from "react-icons";
import { FaRegSmile, FaCode, FaNewspaper } from "react-icons/fa";
import { FriendStatsProps } from "../../types/Friend.types";

const FriendStats = (props: FriendStatsProps) => {
  const { friends, articles, projects, isVIP } = props;

  return (
    <div className="friend-stats my-3 py-3 border-top border-bottom position-relative d-flex flex-column gap-2">
      <IconContext.Provider value={{ size: "1rem" }}>
        <div className="d-flex align-items-center gap-2">
          <FaRegSmile />
          <span>{friends} Friends</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <FaCode />
          <span>{projects} Project</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <FaNewspaper />
          <span>{articles} Articles</span>
        </div>
        {isVIP && (
          <div className="vip position-absolute top-50 fs-1 translate-middle-y opacity-25 fw-bold">
            VIP
          </div>
        )}
      </IconContext.Provider>
    </div>
  );
};

export default FriendStats;
