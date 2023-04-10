import Times from "../../components/Times/Times";
import Servers from "../../components/Servers/Servers";

import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";

const BackupManager = () => {
  return (
    <Section className="backup-manager">
      <SectionHeading>
        <SectionTitle>Backup Manager</SectionTitle>
        <SectionSubTitle>Control Backup Time And Location</SectionSubTitle>
      </SectionHeading>

      <Times />
      <Servers />
    </Section>
  );
};

export default BackupManager;
