import "./SearchItem.scss";
import { Badge } from "react-bootstrap";

type Props = {
  keyword: string;
  count: number;
};

const SearchItem = ({ keyword, count }: Props) => {
  return (
    <tr className="serch-item border-0">
      <td className="border-0 py-3">{keyword}</td>
      <td className="border-0 py-3">
        <Badge bg="" className="text-black">
          {count}
        </Badge>
      </td>
    </tr>
  );
};

export default SearchItem;
