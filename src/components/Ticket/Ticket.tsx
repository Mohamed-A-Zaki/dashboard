import "./Ticket.scss";
import { IconType } from "react-icons";

type Props = {
  type: string;
  count: number;
  Icon: IconType;
};

const Ticket = ({ type, count, Icon }: Props) => {
  return (
    <div
      className={`ticket ${type.toLowerCase()} border rounded-3 p-3 d-flex align-items-center justify-content-center flex-column`}
    >
      <Icon className="fs-3" />
      <div className="count my-2 fw-bold fs-3">{count}</div>
      <div className="type text-muted">{type}</div>
    </div>
  );
};

export default Ticket;
