import data from "../../data/data";
import image from "../../assets/project.png";

import Section from "../../components/Section/Section";
import ProjectStep from "../../components/ProjectStep/ProjectStep";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const LastProject = () => {
  return (
    <Section className="last-project position-relative">
      <SectionHeading>
        <SectionTitle>Last Project Progress</SectionTitle>
      </SectionHeading>

      <div className="steps">
        {data.steps.map((item) => {
          return <ProjectStep key={item.id} {...item} />;
        })}
      </div>

      <img
        src={image}
        className="position-absolute bottom-0"
        alt="project image"
        style={{ width: 150, insetInlineEnd: 0 }}
      />
    </Section>
  );
};

export default LastProject;
