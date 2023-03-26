import "./ProjectImage.scss";
import { Image } from "react-bootstrap";

type Props = {
  ele: string;
  indx: number;
};

const ProjectImage = ({ ele, indx }: Props) => {
  return (
    <Image
      src={ele}
      alt={`team_member_${indx}`}
      className="project-image rounded-circle bg-white position-relative"
    />
  );
};

export default ProjectImage;
