import useScrollToTop from "../Hooks/useScrollToTop";
import Mainheading from "../components/Mainheading/Mainheading";
import ProfileLayout from "../components/ProfileLayout/ProfileLayout";

const Profile = () => {
  useScrollToTop();

  return (
    <div className="profile-page">
      <Mainheading>Profile</Mainheading>
      <ProfileLayout />
    </div>
  );
};

export default Profile;
