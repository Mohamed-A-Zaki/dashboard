import "./FriendStats.scss";
import { IconContext } from "react-icons/lib";
import { FaRegSmile, FaCode, FaNewspaper } from "react-icons/fa";

export type FriendStatsProps = {
  stats: {
    friends: number;
    projects: number;
    articles: number;
  };
  isVIP: boolean;
};

const FriendStats = ({ stats, isVIP }: FriendStatsProps) => {
  const { friends, projects, articles } = stats;

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
