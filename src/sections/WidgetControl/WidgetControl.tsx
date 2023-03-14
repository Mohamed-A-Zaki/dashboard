import "./WidgetControl.scss";
import data from "../../data/data";
import { Form } from "react-bootstrap";

import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";

const WidgetControl = () => {
  return (
    <Section className="widget-control">
      <SectionHeading>
        <SectionTitle>Widgets Control</SectionTitle>
        <SectionSubTitle>Show/Hide Widgets</SectionSubTitle>
      </SectionHeading>

      {data.widgets_list.map(({ id, name, isActive }) => (
        <Form.Check
          key={id}
          type="checkbox"
          id={id.toString()}
          className="mb-3"
          label={name}
          defaultChecked={isActive}
        />
      ))}
    </Section>
  );
};

export default WidgetControl;
