import data from "../../data/data";

import Section from "../../components/Section/Section";
import Activity from "../../components/Activity/Activity";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";

const LatestActivites = () => {
  return (
    <Section className="latest-activites">
      <SectionHeading>
        <SectionTitle>Latest Activities</SectionTitle>
        <SectionSubTitle>Latest Activities Done By The User</SectionSubTitle>
      </SectionHeading>

      {data.activities.map((ele) => (
        <Activity key={ele.id} {...ele} />
      ))}
    </Section>
  );
};

export default LatestActivites;
