import { Form } from "react-bootstrap";

import Switch from "../../components/Switch/Switch";
import Section from "./../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";

const SiteControl = () => {
  return (
    <Section className="site-control">
      <SectionHeading>
        <SectionTitle>Site Control</SectionTitle>
        <SectionSubTitle>
          Control The Website If There Is Maintenance
        </SectionSubTitle>
      </SectionHeading>

      <Form>
        <div className="d-flex align-items-center justify-content-between my-3">
          <div>
            <div className="title">Website Control</div>
            <div className="sub-title text-black-50" style={{ fontSize: 14 }}>
              Open/Close Website And Type The Reason
            </div>
          </div>
          <Switch defaultChecked={true} />
        </div>
        <Form.Control
          as="textarea"
          className="shadow-none"
          style={{ fontSize: 14 }}
          aria-label="Close Message Content"
          placeholder="Close Message Content"
        />
      </Form>
    </Section>
  );
};

export default SiteControl;
