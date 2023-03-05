import Task from "../../components/Task/Task";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

import data from "../../data/data";

const LatestTasks = () => {
  return (
    <Section className="latest-tasks">
      <SectionHeading>
        <SectionTitle>Latest Tasks</SectionTitle>
      </SectionHeading>

      <div className="tasks">
        {data.tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </Section>
  );
};

export default LatestTasks;
