import "./Sidebar.scss";
import SidebarLink from "../../components/SidebarLink/SidebarLink";

import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiFillFilePdf } from "react-icons/ai";
import {
  FaChartBar,
  FaProjectDiagram,
  FaGraduationCap,
  FaUserFriends,
  FaAddressCard,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    to: "/",
    text: "Dashboard",
    Icon: FaChartBar,
  },
  {
    id: 2,
    to: "/settings",
    text: "Settings",
    Icon: IoMdSettings,
  },
  {
    id: 3,
    to: "/profile",
    text: "Profile",
    Icon: CgProfile,
  },
  {
    id: 4,
    to: "/projects",
    text: "Projects",
    Icon: FaProjectDiagram,
  },
  {
    id: 5,
    to: "/courses",
    text: "Courses",
    Icon: FaGraduationCap,
  },
  {
    id: 6,
    to: "/friends",
    text: "Friends",
    Icon: FaUserFriends,
  },
  {
    id: 7,
    to: "/files",
    text: "Files",
    Icon: AiFillFilePdf,
  },
  {
    id: 8,
    to: "/plans",
    text: "Plans",
    Icon: FaAddressCard,
  },
];

const Sidebar = () => {
  return (
    <section className="side-bar shadow vh-100 p-3 bg-white position-relative">
      <h1 className="h4 text-center position-relative pb-3 mb-0 mb-md-4">
        Elzero
      </h1>
      <div className="links">
        {data.map((item) => {
          return <SidebarLink key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Sidebar;
