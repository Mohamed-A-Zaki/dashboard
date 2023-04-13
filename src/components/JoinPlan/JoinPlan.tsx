import MainButton from "../MainButton/MainButton";

type Props = {
  joined: boolean;
};

const JoinPlan = ({ joined }: Props) => {
  return (
    <div className="join-plan mt-3">
      {joined ? (
        <div className="current-plan text-center fw-semibold">
          This Is Your Current Plan
        </div>
      ) : (
        <MainButton>Join</MainButton>
      )}
    </div>
  );
};

export default JoinPlan;
