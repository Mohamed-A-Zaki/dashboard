import data from "../../data/data";

import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SocialMediaItem from "../../components/SocialMediaItem/SocialMediaItem";

const SocialMedia = () => {
  return (
    <Section className="social-media">
      <SectionHeading>
        <SectionTitle>Social Media Stats</SectionTitle>
      </SectionHeading>

      <div className="content">
        {data.social_media.map((item) => {
          return <SocialMediaItem key={item.id} {...item} />;
        })}
      </div>
    </Section>
  );
};

export default SocialMedia;
