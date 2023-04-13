import useScrollToTop from "../Hooks/useScrollToTop";
import FriendsList from "../sections/FriendsList/FriendsList";
import Mainheading from "../components/Mainheading/Mainheading";

const Friends = () => {
  useScrollToTop();

  return (
    <div className="friends-page">
      <Mainheading>Friends</Mainheading>
      <FriendsList />
    </div>
  );
};

export default Friends;
