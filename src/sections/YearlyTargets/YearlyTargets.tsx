import data from "../../data/data";
import Target from "../../components/Target/Target";

import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";

const YearlyTargets = () => {
  return (
    <Section className="yearly-target">
      <SectionHeading>
        <SectionTitle>Yearly Targets</SectionTitle>
        <SectionSubTitle>Targets Of The Year</SectionSubTitle>
      </SectionHeading>

      <div className="targets">
        {data.year_targets.map((item) => (
          <Target key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default YearlyTargets;
