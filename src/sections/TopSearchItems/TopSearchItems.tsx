import data from "../../data/data";
import { Table } from "react-bootstrap";

import Section from "../../components/Section/Section";
import SearchItem from "../../components/SearchItem/SearchItem";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const TopSearchItems = () => {
  return (
    <Section className="top-search-items">
      <SectionHeading>
        <SectionTitle>Top Search Items</SectionTitle>
      </SectionHeading>

      <Table>
        <thead>
          <tr className="border-0 text-black-50">
            <th className="border-0">Keyword</th>
            <th className="border-0" style={{ textAlign: "end" }}>
              Search Count
            </th>
          </tr>
        </thead>
        <tbody>
          {data.search.map((ele) => (
            <SearchItem key={ele.id} {...ele} />
          ))}
        </tbody>
      </Table>
    </Section>
  );
};

export default TopSearchItems;
