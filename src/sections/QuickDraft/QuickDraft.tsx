import { Form } from "react-bootstrap";

import Section from "../../components/Section/Section";
import MainButton from "../../components/MainButton/MainButton";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";

const QuickDraft = () => {
  return (
    <Section className="quick-draft">
      <SectionHeading>
        <SectionTitle>Quick Draft</SectionTitle>
        <SectionSubTitle>Write A Draft For Your Ideas</SectionSubTitle>
      </SectionHeading>

      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Title"
            aria-label="title"
            className="shadow-none"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Your Message"
            aria-label="your message"
            className="shadow-none"
          />
        </Form.Group>
        <MainButton className="d-block" type="submit">
          Save
        </MainButton>
      </Form>
    </Section>
  );
};

export default QuickDraft;
