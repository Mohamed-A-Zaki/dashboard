export type FriendStatsProps = {
  friends: number;
  projects: number;
  articles: number;
  isVIP: boolean;
};

export type FriendProps = {
  name: string;
  job: string;
  join_date: string;
  image: string;
  stats: FriendStatsProps;
};
