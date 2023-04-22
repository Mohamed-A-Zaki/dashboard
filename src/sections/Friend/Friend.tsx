import { FriendProps } from "../../types/Friend.types";

import Section from "../../components/Section/Section";
import FriendInfo from "../../components/FriendInfo/FriendInfo";
import JoinFriends from "../../components/JoinFriends/JoinFriends";
import FriendStats from "../../components/FriendStats/FriendStats";
import FriendContact from "../../components/FriendContact/FriendContact";

const Friend = ({ name, image, job, join_date, stats }: FriendProps) => {
  return (
    <Section className="friend position-relative">
      <FriendContact />
      <FriendInfo name={name} job={job} image={image} />
      <FriendStats {...stats} />
      <JoinFriends join_date={join_date} />
    </Section>
  );
};

export default Friend;
