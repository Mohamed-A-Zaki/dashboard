import "./SidebarLink.scss";
import { NavLink } from "react-router-dom";
import { IconType } from "react-icons/lib";

type Props = {
  to: string;
  text: string;
  Icon: IconType;
};

const SidebarLink = ({ to, text, Icon }: Props) => {
  return (
    <NavLink
      to={to}
      className="sidebar-link border-white d-block p-2 my-1 m-auto rounded text-decoration-none text-black"
    >
      <Icon className="d-block d-md-inline-block m-auto" />
      <span className="d-none d-md-inline-block mx-3">{text}</span>
    </NavLink>
  );
};

export default SidebarLink;
