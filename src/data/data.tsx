import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { AiFillFilePdf } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import { CgCloseR } from "react-icons/cg";

import {
  FaChartBar,
  FaUserFriends,
  FaAddressCard,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  BsCardList,
  BsCodeSlash,
  BsCheck2Circle,
  BsFillPersonFill,
  BsCurrencyDollar,
} from "react-icons/bs";

const data = {
  pages: [
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
  ],
  year_targets: [
    {
      id: 1,
      title: "Money",
      count: "$20.000",
      persentage: 80,
      Icon: BsCurrencyDollar,
    },
    {
      id: 2,
      title: "Projects",
      count: "24",
      persentage: 55,
      Icon: BsCodeSlash,
    },
    {
      id: 3,
      title: "Team",
      count: "12",
      persentage: 75,
      Icon: BsFillPersonFill,
    },
  ],
  tickets: [
    {
      id: 1,
      type: "Total",
      count: 2500,
      Icon: BsCardList,
    },
    {
      id: 2,
      type: "Pending",
      count: 500,
      Icon: BiLoaderCircle,
    },
    {
      id: 3,
      type: "Closed",
      count: 1900,
      Icon: BsCheck2Circle,
    },
    {
      id: 4,
      type: "Deleted",
      count: 100,
      Icon: CgCloseR,
    },
  ],
};

export default data;
