import "./Sidebar.scss";
import data from "../../data/data";
import SidebarLink from "../../components/SidebarLink/SidebarLink";
import Section from "./../../components/Section/Section";

const Sidebar = () => {
  return (
    <Section className="side-bar shadow position-relative flex-shrink-0 h-auto">
      <h1 className="title h5 fw-bold text-center position-relative pb-3 mb-0 mb-md-4">
        Elzero
      </h1>
      <div className="links">
        {data.pages.map((item) => {
          return <SidebarLink key={item.id} {...item} />;
        })}
      </div>
    </Section>
  );
};

export default Sidebar;
