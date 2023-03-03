import "./Sidebar.scss";
import data from "../../data/data";
import SidebarLink from "../../components/SidebarLink/SidebarLink";

const Sidebar = () => {
  return (
    <section className="side-bar shadow vh-100 p-3 bg-white position-relative">
      <h1 className="title h5 fw-bold text-center position-relative pb-3 mb-0 mb-md-4">
        Elzero
      </h1>
      <div className="links">
        {data.pages.map((item) => {
          return <SidebarLink key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Sidebar;
