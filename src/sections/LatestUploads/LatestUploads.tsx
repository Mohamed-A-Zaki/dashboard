import data from "../../data/data";

import Section from "../../components/Section/Section";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import UploadItem from "../../components/UploadItem/UploadItem";

const LatestUploads = () => {
  return (
    <Section className="latest-uploads">
      <SectionHeading>
        <SectionTitle>Latest Uploads</SectionTitle>
      </SectionHeading>

      <div className="items">
        {data.upload_files.map((item) => (
          <UploadItem key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default LatestUploads;
