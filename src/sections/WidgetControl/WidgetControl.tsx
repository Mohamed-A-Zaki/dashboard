import data from "../../data/data";

import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";
import CustomFormCheck from "../../components/CustomFormCheck/CustomFormCheck";

const WidgetControl = () => {
  return (
    <Section className="widget-control">
      <SectionHeading>
        <SectionTitle>Widgets Control</SectionTitle>
        <SectionSubTitle>Show/Hide Widgets</SectionSubTitle>
      </SectionHeading>

      {data.widgets_list.map((item) => (
        <CustomFormCheck
          key={item.id}
          type="checkbox"
          name="widgets"
          {...item}
        />
      ))}
    </Section>
  );
};

export default WidgetControl;
