import data from "../../data/data";

import Section from "../../components/Section/Section";
import ProjectStep from "../../components/ProjectStep/ProjectStep";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const LastProject = () => {
  return (
    <Section className="last-project">
      <SectionHeading>
        <SectionTitle>Last Project Progress</SectionTitle>
      </SectionHeading>

      <div className="steps">
        {data.steps.map((item) => {
          return <ProjectStep key={item.id} {...item} />;
        })}
      </div>
    </Section>
  );
};

export default LastProject;
