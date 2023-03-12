import data from "../../data/data";
import { Table } from "react-bootstrap";

import Section from "../../components/Section/Section";
import ProjectRow from "../../components/ProjectRow/ProjectRow";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const ProjectsTable = () => {
  return (
    <Section className="projects-table mt-3">
      <SectionHeading>
        <SectionTitle>Projects</SectionTitle>
      </SectionHeading>

      <Table bordered hover responsive style={{ minWidth: 800 }}>
        <thead>
          <tr className="table-secondary">
            <th className="p-3">Name</th>
            <th className="p-3">Finish Date</th>
            <th className="p-3">Client</th>
            <th className="p-3">Price</th>
            <th className="p-3">Team</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.projects.map((project) => {
            return <ProjectRow key={project.id} {...project} />;
          })}
        </tbody>
      </Table>
    </Section>
  );
};

export default ProjectsTable;
