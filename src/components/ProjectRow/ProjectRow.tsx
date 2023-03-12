import "./ProjectRow.scss";
import { Badge, Image } from "react-bootstrap";

type Props = {
  name: string;
  finish_date: string;
  client: string;
  price: string;
  team: string[];
  status: string;
};

const ProjectRow = (props: Props) => {
  const { name, finish_date, client, price, team, status } = props;

  const team_members = team.map((ele, indx) => {
    return (
      <Image
        key={indx}
        src={ele}
        alt={`team_member_${indx}`}
        className="rounded-circle bg-white"
      />
    );
  });

  const status_element = (
    <Badge
      bg=""
      className={`status ${status.toLowerCase().replace(" ", "-")} text-white m-auto d-block`}
    >
      {status}
    </Badge>
  );

  return (
    <tr className="project-row">
      <td className="p-3">{name}</td>
      <td className="p-3">{finish_date}</td>
      <td className="p-3">{client}</td>
      <td className="p-3">{price}</td>
      <td className="p-3">{team_members}</td>
      <td className="p-3">{status_element}</td>
    </tr>
  );
};

export default ProjectRow;
