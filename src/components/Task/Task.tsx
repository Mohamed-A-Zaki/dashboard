import "./Task.scss";
import { FaRegTrashAlt } from "react-icons/fa";

type Props = {
  title: string;
  desc: string;
  isDone: boolean;
};

const Task = ({ title, desc, isDone }: Props) => {
  return (
    <div
      className={`task ${
        isDone ? "done" : ""
      } d-flex align-items-center justify-content-between pb-2 mt-2`}
    >
      <div className="content">
        <div className="title fw-bold">{title}</div>
        <div className="desc text-black-50">{desc}</div>
      </div>
      <FaRegTrashAlt />
    </div>
  );
};

export default Task;
