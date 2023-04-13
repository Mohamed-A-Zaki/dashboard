import "./Ticket.scss";
import CountUp from "react-countup";
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

      <CountUp start={0} end={count} separator="" enableScrollSpy>
        {({ countUpRef }) => (
          <span className="count my-1 fw-bold fs-3" ref={countUpRef} />
        )}
      </CountUp>

      <div className="type text-black-50">{type}</div>
    </div>
  );
};

export default Ticket;
