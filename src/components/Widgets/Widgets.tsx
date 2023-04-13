import { Col, Row } from "react-bootstrap";

type Props = {
  sections: {
    id: number;
    Section: () => JSX.Element;
  }[];
};

const Widgets = ({ sections }: Props) => {
  return (
    <Row xs={1} lg={2} xxl={3} className="g-3">
      {sections.map(({ id, Section }) => (
        <Col key={id}>{<Section />}</Col>
      ))}
    </Row>
  );
};

export default Widgets;
