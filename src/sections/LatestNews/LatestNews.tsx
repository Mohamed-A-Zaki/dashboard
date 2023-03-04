import News from "../../components/News/News";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

import data from "../../data/data";

const LatestNews = () => {
  return (
    <Section className="latest-news">
      <SectionHeading>
        <SectionTitle>Latest News</SectionTitle>
      </SectionHeading>

      <div className="news-list">
        {data.news.map((item) => (
          <News key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default LatestNews;
