import React from "react";
import "./LatestActivites.scss";
import Section from "../../components/Section/Section";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";

type Props = {};

import data from "../../data/data";
import Activity from "../../components/Activity/Activity";

const LatestActivites = (props: Props) => {
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
