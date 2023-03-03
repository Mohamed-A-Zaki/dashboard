import data from "../../data/data";
import { Col, Row } from "react-bootstrap";

import Ticket from "../../components/Ticket/Ticket";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";

const Tickets = () => {
  return (
    <Section className="tickets">
      <SectionHeading>
        <SectionTitle>Tickets Statistics</SectionTitle>
        <SectionSubTitle>Everything About Support Tickets</SectionSubTitle>
      </SectionHeading>

      <Row xs={1} md={2} className="g-3">
        {data.tickets.map((item) => (
          <Col key={item.id}>
            <Ticket {...item} />
          </Col>
        ))}
      </Row>
    </Section>
  );
};

export default Tickets;
