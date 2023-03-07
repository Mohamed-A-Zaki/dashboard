import data from "../../data/data";

import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ReminderItem from "../../components/ReminderItem/ReminderItem";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const Reminders = () => {
  return (
    <Section className="reminder">
      <SectionHeading>
        <SectionTitle>Reminders</SectionTitle>
      </SectionHeading>

      <div className="reminder-list">
        {data.reminders.map((item) => {
          return <ReminderItem key={item.id} {...item} />;
        })}
      </div>
    </Section>
  );
};

export default Reminders;
