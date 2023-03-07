import "./ReminderItem.scss";

type Props = {
  title: string;
  time: string;
  color: string;
};

const ReminderItem = ({ title, time, color }: Props) => {
  return (
    <div className={`reminder-item mt-3 position-relative ${color}`}>
      <div className="title fw-bold">{title}</div>
      <div className="time text-black-50 mt-1">{time}</div>
    </div>
  );
};

export default ReminderItem;
