import React from "react";
import Mainheading from "../components/Mainheading/Mainheading";
import PersonalInformation from "../sections/PersonalInformation/PersonalInformation";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="profile-page">
      <Mainheading>Profile</Mainheading>

      <PersonalInformation />
    </div>
  );
};

export default Profile;
