import "./Project.scss";
import { Badge, ProgressBar } from "react-bootstrap";
import Section from "../../components/Section/Section";
import ProjectImage from "../../components/ProjectImage/ProjectImage";

type Props = {
  name: string;
  finish_date: string;
  client: string;
  price: string;
  status: string;
  progress: number;
  description: string;
  team: string[];
  tags: string[];
};

const Project = (props: Props) => {
  const { name, description, finish_date, team, tags, progress, price } = props;

  return (
    <Section className="project position-relative">
      <div className="name fw-semibold">{name}</div>
      <div className="description text-black-50">{description}</div>

      <div className="date position-absolute top-0 m-2 text-black-50">
        {finish_date}
      </div>

      <div className="team my-3">
        {team.map((ele, indx) => {
          return <ProjectImage key={indx} ele={ele} indx={indx} />;
        })}
      </div>

      <div className="tags my-3 py-3 border-top border-bottom d-flex justify-content-center flex-wrap gap-2">
        {tags.map((ele, indx) => {
          return (
            <Badge key={indx} className="text-black">
              {ele}
            </Badge>
          );
        })}
      </div>

      <div className="info d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <ProgressBar now={progress} />
        <div className="price text-black-50">{price}</div>
      </div>
    </Section>
  );
};

export default Project;
