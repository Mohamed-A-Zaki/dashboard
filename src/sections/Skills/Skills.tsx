import "./Skills.scss";

import data from "../../data/data";
import { Badge } from "react-bootstrap";

import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";

const Skills = () => {
  return (
    <Section className="my-skills">
      <SectionHeading>
        <SectionTitle>My Skills</SectionTitle>
        <SectionSubTitle>Complete Skills List</SectionSubTitle>
      </SectionHeading>

      <div className="siklls-list">
        {Object.values(data.skills).map((ele, indx) => {
          return (
            <div className="item border-bottom" key={indx}>
              {ele.map((skill, indx) => (
                <Badge
                  bg=""
                  key={indx}
                  className="skill text-black me-2 px-3 py-2 fw-normal"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
