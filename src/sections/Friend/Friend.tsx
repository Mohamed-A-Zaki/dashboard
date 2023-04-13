import Section from "../../components/Section/Section";
import FriendInfo from "../../components/FriendInfo/FriendInfo";
import JoinFriends from "../../components/JoinFriends/JoinFriends";
import FriendContact from "../../components/FriendContact/FriendContact";

import FriendStats, {
  FriendStatsProps,
} from "../../components/FriendStats/FriendStats";

type Props = {
  name: string;
  job: string;
  join_date: string;
  image: string;
} & FriendStatsProps;

const Friend = ({ name, image, job, isVIP, join_date, stats }: Props) => {
  return (
    <Section className="friend position-relative">
      <FriendContact />
      <FriendInfo name={name} job={job} image={image} />
      <FriendStats stats={stats} isVIP={isVIP} />
      <JoinFriends join_date={join_date} />
    </Section>
  );
};

export default Friend;
