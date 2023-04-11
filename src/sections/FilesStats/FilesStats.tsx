import "./FilesStats.scss";

import Section from "../../components/Section/Section";
import FileStats from "../../components/FileStats/FileStats";
import MainButton from "../../components/MainButton/MainButton";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

import data from "../../data/data";
import { FaAngleDoubleUp } from "react-icons/fa";

const FilesStats = () => {
  return (
    <Section className="files-stats h-auto">
      <SectionHeading>
        <SectionTitle>Files Statistics</SectionTitle>
      </SectionHeading>

      {data.files_stats.map((file) => {
        return <FileStats key={file.id} {...file} />;
      })}

      <MainButton className="d-flex align-items-center m-auto gap-2">
        <FaAngleDoubleUp />
        Upload
      </MainButton>
    </Section>
  );
};

export default FilesStats;
