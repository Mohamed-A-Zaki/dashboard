import "./FileStats.scss";
import { IconType } from "react-icons";

type Props = {
  name: string;
  count: number;
  size: string;
  Icon: IconType;
};

const FileStats = ({ name, count, size, Icon }: Props) => {
  return (
    <div
      className={`file-stats ${
        name.split(" ")[0]
      } d-flex align-items-center justify-content-between border rounded p-2 my-3 gap-3`}
    >
      <Icon size={45} className="rounded" />

      <div className="flex-grow-1">
        <div className="name fw-semibold">{name}</div>
        <div className="count text-black-50">{count} Files</div>
      </div>

      <div className="size text-black-50">{size}</div>
    </div>
  );
};

export default FileStats;
