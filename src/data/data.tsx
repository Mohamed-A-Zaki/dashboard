import { CgProfile, CgCloseR } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { AiFillFilePdf } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";

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

import new_1_img from "../assets/news-01.png";
import new_2_img from "../assets/news-02.png";
import new_3_img from "../assets/news-03.png";
import new_4_img from "../assets/news-04.png";

import file_1 from "../assets/pdf.svg";
import file_2 from "../assets/avi.svg";
import file_3 from "../assets/psd.svg";
import file_4 from "../assets/zip.svg";
import file_5 from "../assets/dll.svg";
import file_6 from "../assets/eps.svg";

const data = {
  welcome_info: [
    {
      id: 1,
      value: "Osama Elzero",
      label: "Developer",
    },
    {
      id: 2,
      value: "80",
      label: "Projects",
    },
    {
      id: 3,
      value: "$8500",
      label: "Earned",
    },
  ],
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
  news: [
    {
      id: 1,
      title: "Created SASS Section",
      description: "New SASS Examples & Tutorials",
      date: "3 Days Ago",
      img: new_1_img,
    },
    {
      id: 2,
      title: "Changed The Design",
      description: "A Brand New Website Design",
      date: "5 Days Ago",
      img: new_2_img,
    },
    {
      id: 3,
      title: "Team Increased",
      description: "3 Developers Joined The Team",
      date: "7 Days Ago",
      img: new_3_img,
    },
    {
      id: 4,
      title: "Added Payment Gateway",
      description: "Many New Payment Gateways Added",
      date: "9 Days Ago",
      img: new_4_img,
    },
  ],
  tasks: [
    {
      id: 1,
      title: "Record One New Video",
      desc: "Record Python Create Exe Project",
      isDone: false,
    },
    {
      id: 2,
      title: "Write Article",
      desc: "Write Low Level vs High Level Languages",
      isDone: false,
    },
    {
      id: 3,
      title: "Finish Project",
      desc: "Publish Academy Programming Project",
      isDone: true,
    },
    {
      id: 4,
      title: "Attend The Meeting",
      desc: "Attend The Project Business Analysis Meeting",
      isDone: false,
    },
    {
      id: 5,
      title: "Finish Lesson",
      desc: "Finish Teaching Flex Box",
      isDone: false,
    },
  ],
  search: [
    {
      id: 1,
      keyword: "Programming",
      count: 220,
    },
    {
      id: 2,
      keyword: "JavaScript",
      count: 180,
    },
    {
      id: 3,
      keyword: "PHP",
      count: 160,
    },
    {
      id: 4,
      keyword: "Code",
      count: 145,
    },
    {
      id: 5,
      keyword: "Design",
      count: 110,
    },
    {
      id: 6,
      keyword: "Logic",
      count: 195,
    },
  ],
  upload_files: [
    {
      id: 1,
      file_name: "my-file.pdf",
      person: "Elzero",
      size: "2.9mb",
      img: file_1,
    },
    {
      id: 2,
      file_name: "My-Video-File.avi",
      person: "Admin",
      size: "4.9mb",
      img: file_2,
    },
    {
      id: 3,
      file_name: "My-Psd-File.pdf",
      person: "Osama",
      size: "4.5mb",
      img: file_3,
    },
    {
      id: 4,
      file_name: "My-Zip-File.pdf",
      person: "User",
      size: "8.9mb",
      img: file_4,
    },
    {
      id: 5,
      file_name: "My-DLL-File.pdf",
      person: "Admin",
      size: "4.9mb",
      img: file_5,
    },
    {
      id: 6,
      file_name: "My-Eps-File.pdf",
      person: "Designer",
      size: "8.9mb",
      img: file_6,
    },
  ],
  steps: [
    {
      id: 1,
      step: "Got The Project",
      status: "done",
    },
    {
      id: 2,
      step: "Started The Project",
      status: "done",
    },
    {
      id: 3,
      step: "The Project About To Finish",
      status: "done",
    },
    {
      id: 4,
      step: "Test The Project",
      status: "active",
    },
    {
      id: 5,
      step: "Finish The Project & Get Money",
      status: "",
    },
  ],
};

export default data;
