import { useState } from "react";

import "./GeneralInfo.scss";
import { Form } from "react-bootstrap";

import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";

const GeneralInfo = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <Section className="general-info">
      <SectionHeading>
        <SectionTitle>General Info</SectionTitle>
        <SectionSubTitle>
          General Information About Your Account
        </SectionSubTitle>
      </SectionHeading>

      <Form>
        <Form.Group className="mb-2">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            className="shadow-none"
            placeholder="First Name"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            className="shadow-none"
            placeholder="Last Name"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <div className="d-flex gap-3 align-items-center">
            <Form.Control
              type="email"
              className="shadow-none"
              placeholder="example@example.com"
              disabled={isDisabled}
              onBlur={() => setIsDisabled(true)}
            />
            <span className="change" onClick={() => setIsDisabled(!isDisabled)}>
              Change
            </span>
          </div>
        </Form.Group>
      </Form>
    </Section>
  );
};

export default GeneralInfo;
