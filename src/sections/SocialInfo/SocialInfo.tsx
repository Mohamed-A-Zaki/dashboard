import "./SocialInfo.scss";
import { Form, InputGroup } from "react-bootstrap";

import Section from "../../components/Section/Section";
import SectionTitle from "./../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";

import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const SocialInfo = () => {
  return (
    <Section className="social-info">
      <SectionHeading>
        <SectionTitle>Social Info</SectionTitle>
        <SectionSubTitle>Social Media Information</SectionSubTitle>
      </SectionHeading>

      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text className="opacity-50 rounded">
            <FaTwitter />
          </InputGroup.Text>
          <Form.Control
            type="text"
            className="bg-light shadow-none border rounded"
            placeholder="Twitter Username"
            aria-label="Twitter Username"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className="opacity-50 rounded">
            <FaFacebookF />
          </InputGroup.Text>
          <Form.Control
            type="text"
            className="bg-light shadow-none border rounded"
            placeholder="Facebook Username"
            aria-label="Facebook Username"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className="opacity-50 rounded">
            <FaLinkedinIn />
          </InputGroup.Text>
          <Form.Control
            type="text"
            className="bg-light shadow-none border rounded"
            placeholder="LinkedIn Username"
            aria-label="LinkedIn Username"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className="opacity-50 rounded">
            <FaYoutube />
          </InputGroup.Text>
          <Form.Control
            type="text"
            className="bg-light shadow-none border rounded"
            placeholder="Youtube Username"
            aria-label="Youtube Username"
          />
        </InputGroup>
      </Form>
    </Section>
  );
};

export default SocialInfo;
