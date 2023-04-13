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
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaRegFilePdf,
  FaImages,
  FaFileWord,
  FaFileCsv,
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

import team_1 from "../assets/team-01.png";
import team_2 from "../assets/team-02.png";
import team_3 from "../assets/team-03.png";
import team_4 from "../assets/team-04.png";
import team_5 from "../assets/team-05.png";

import file_1 from "../assets/pdf.svg";
import file_2 from "../assets/avi.svg";
import file_3 from "../assets/psd.svg";
import file_4 from "../assets/zip.svg";
import file_5 from "../assets/dll.svg";
import file_6 from "../assets/eps.svg";

import course_1 from "../assets/course-01.jpg";
import course_2 from "../assets/course-02.jpg";
import course_3 from "../assets/course-03.jpg";
import course_4 from "../assets/course-04.jpg";
import course_5 from "../assets/course-05.jpg";

import friend_1 from "../assets/friend-01.jpg";
import friend_2 from "../assets/friend-02.jpg";
import friend_3 from "../assets/friend-03.jpg";
import friend_4 from "../assets/friend-04.jpg";
import friend_5 from "../assets/friend-05.jpg";

import activity_1 from "../assets/activity-01.png";
import activity_2 from "../assets/activity-02.png";
import activity_3 from "../assets/activity-03.png";

import pdf_file from "../assets/pdf.svg";
import avi_file from "../assets/avi.svg";
import eps_file from "../assets/eps.svg";
import psd_file from "../assets/psd.svg";
import dll_file from "../assets/dll.svg";
import png_file from "../assets/png.svg";

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
  reminders: [
    {
      id: 1,
      title: "Check My Tasks List",
      time: "28/09/2022 - 12:00am",
      color: "blue",
    },
    {
      id: 2,
      title: "Check My Projects",
      time: "26/10/2022 - 12:00am",
      color: "green",
    },
    {
      id: 3,
      title: "Call All My Clients",
      time: "05/11/2022 - 12:00am",
      color: "orange",
    },
    {
      id: 4,
      title: "Finish The Development Workshop",
      time: "20/12/2022 - 12:00am",
      color: "red",
    },
  ],
  social_media: [
    {
      id: 1,
      text: "90K Followers",
      label: "Follow",
      type: "twitter",
      Icon: FaTwitter,
    },
    {
      id: 2,
      text: "2M Like",
      label: "Like",
      type: "facebook",
      Icon: FaFacebookF,
    },
    {
      id: 3,
      text: "1M Subs",
      label: "Subscribe",
      type: "youtube",
      Icon: FaYoutube,
    },
    {
      id: 4,
      text: "70K Followers",
      label: "Follow",
      type: "linkedin",
      Icon: FaLinkedinIn,
    },
  ],
  projects: [
    {
      id: 1,
      name: "Ministry Wikipedia",
      finish_date: "10 May 2022",
      client: "Ministry",
      price: "$5300",
      team: [team_1, team_2, team_3],
      status: "Pending",
      progress: 50,
      description:
        "Elzero Dashboard Project Design And Programming And Hosting",
      tags: ["Programming", "Design", "Hosting", "Marketing"],
    },
    {
      id: 2,
      name: "Elzero Shop",
      finish_date: "12 Oct 2021",
      client: "Elzero Company",
      price: "$1500",
      team: [team_1, team_2, team_5],
      status: "In Progress",
      progress: 70,
      description: "Academy Portal Project Design And Programming",
      tags: ["Programming", "Design", "Marketing"],
    },
    {
      id: 3,
      name: "Bouba App",
      finish_date: "05 Sep 2021",
      client: "Bouba",
      price: "$800",
      team: [team_4, team_5],
      status: "Completed",
      progress: 60,
      description: "Chatting Application Project Design",
      tags: ["Programming", "Design"],
    },
    {
      id: 4,
      name: "Mahmoud Website",
      finish_date: "22 May 2021",
      client: "Mahmoud",
      price: "$600",
      team: [team_1, team_3, team_4, team_5],
      status: "Completed",
      progress: 50,
      description: "Ahmed Portal Project Design And Programming",
      tags: ["Programming", "Marketing"],
    },
    {
      id: 5,
      name: "Sayed Website",
      finish_date: "24 May 2021",
      client: "Sayed",
      price: "$300",
      team: [team_3, team_4],
      status: "Pending",
      progress: 70,
      description: "Mohamed Application Project Design",
      tags: ["Programming", "Hosting", "Marketing"],
    },
    {
      id: 6,
      name: "Arena Application",
      finish_date: "01 Mar 2021",
      client: "Arena Company",
      price: "$2600",
      team: [team_1, team_2, team_5],
      status: "Completed",
      progress: 50,
      description:
        "Mohamed Dashboard Project Design And Programming And Hosting",
      tags: ["Programming", "Design", "Hosting"],
    },
  ],
  widgets_list: [
    {
      id: "Quick Draft",
      label: "Quick Draft",
      defaultChecked: true,
    },
    {
      id: "Yearly Targets",
      label: "Yearly Targets",
      defaultChecked: true,
    },
    {
      id: "Tickets Statistics",
      label: "Tickets Statistics",
      defaultChecked: true,
    },
    {
      id: "Latest News",
      label: "Latest News",
      defaultChecked: true,
    },
    {
      id: "Latest Tasks",
      label: "Latest Tasks",
      defaultChecked: false,
    },
    {
      id: "Top Search Items",
      label: "Top Search Items",
      defaultChecked: false,
    },
  ],
  times: [
    {
      id: "Daily",
      label: "Daily",
      defaultChecked: false,
    },
    {
      id: "Weekly",
      label: "Weekly",
      defaultChecked: true,
    },
    {
      id: "Monthly",
      label: "Monthly",
      defaultChecked: false,
    },
  ],
  servers: [
    {
      id: 1,
      name: "Megaman",
    },
    {
      id: 2,
      name: "Zero",
    },
    {
      id: 3,
      name: "Segma",
    },
  ],
  courses: [
    {
      id: 1,
      name: "Mastering Web Design",
      desc: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
      students: 950,
      price: 165,
      instructor: team_1,
      image: course_1,
    },
    {
      id: 2,
      name: "Data Structure And Algorithms",
      desc: "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
      students: 1150,
      price: 210,
      instructor: team_2,
      image: course_2,
    },
    {
      id: 3,
      name: "Mastering Web Design",
      desc: "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
      students: 650,
      price: 90,
      instructor: team_3,
      image: course_3,
    },
    {
      id: 4,
      name: "Mastering Python",
      desc: "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
      students: 950,
      price: 250,
      instructor: team_4,
      image: course_4,
    },
    {
      id: 5,
      name: "PHP Examples",
      desc: "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
      students: 850,
      price: 150,
      instructor: team_5,
      image: course_5,
    },
    {
      id: 6,
      name: "Mastering Web Design",
      desc: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
      students: 950,
      price: 165,
      instructor: team_1,
      image: course_1,
    },
    {
      id: 7,
      name: "Data Structure And Algorithms",
      desc: "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
      students: 1150,
      price: 210,
      instructor: team_2,
      image: course_2,
    },
    {
      id: 8,
      name: "Mastering Web Design",
      desc: "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
      students: 650,
      price: 90,
      instructor: team_3,
      image: course_3,
    },
    {
      id: 9,
      name: "Mastering Python",
      desc: "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
      students: 950,
      price: 250,
      instructor: team_4,
      image: course_4,
    },
    {
      id: 10,
      name: "PHP Examples",
      desc: "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
      students: 850,
      price: 150,
      instructor: team_5,
      image: course_5,
    },
  ],
  friends: [
    {
      id: 1,
      name: "Ahmed Nasser",
      job: "JavaScript Developer",
      join_date: "02/10/2021",
      isVIP: true,
      image: friend_1,
      stats: {
        friends: 99,
        projects: 15,
        articles: 25,
      },
    },
    {
      id: 2,
      name: "Omar Fathy",
      job: "Cloud Developer",
      join_date: "02/08/2020",
      isVIP: false,
      image: friend_2,
      stats: {
        friends: 30,
        projects: 11,
        articles: 12,
      },
    },
    {
      id: 3,
      name: "Omar Ahmed",
      job: "Mobile Developer",
      join_date: "02/06/2020",
      isVIP: false,
      image: friend_3,
      stats: {
        friends: 80,
        projects: 20,
        articles: 18,
      },
    },
    {
      id: 4,
      name: "Shady Nabil",
      job: "Back-End Developer",
      join_date: "28/06/2020",
      isVIP: false,
      image: friend_4,
      stats: {
        friends: 80,
        projects: 20,
        articles: 18,
      },
    },
    {
      id: 5,
      name: "Mohamed Ibrahim",
      job: "Algorithm Developer",
      join_date: "28/06/2020",
      isVIP: false,
      image: friend_5,
      stats: {
        friends: 80,
        projects: 30,
        articles: 18,
      },
    },
    {
      id: 6,
      name: "Amr Hendawy",
      job: "Back-End Developer",
      join_date: "28/06/2020",
      isVIP: true,
      image: friend_1,
      stats: {
        friends: 70,
        projects: 30,
        articles: 18,
      },
    },
    {
      id: 7,
      name: "Mahmoud Adel",
      job: "Cloud Developer",
      join_date: "02/08/2020",
      isVIP: false,
      image: friend_2,
      stats: {
        friends: 30,
        projects: 11,
        articles: 12,
      },
    },
    {
      id: 8,
      name: "Ahmed Abuzaid",
      job: "Content Creator",
      join_date: "28/08/2020",
      isVIP: true,
      image: friend_3,
      stats: {
        friends: 80,
        projects: 30,
        articles: 18,
      },
    },
    {
      id: 9,
      name: "Gareeb Elshiekh",
      job: "JavaScript Developer",
      join_date: "02/10/2020",
      isVIP: false,
      image: friend_4,
      stats: {
        friends: 90,
        projects: 15,
        articles: 25,
      },
    },
    {
      id: 10,
      name: "Hamza",
      job: "Front-End Developer",
      join_date: "02/06/2020",
      isVIP: false,
      image: friend_5,
      stats: {
        friends: 80,
        projects: 20,
        articles: 18,
      },
    },
  ],
  plans: [
    {
      id: 1,
      name: "Free",
      price: "0.00",
      features: [
        {
          id: 1,
          name: "Access All Text Lessons",
          isActive: true,
        },
        {
          id: 2,
          name: "Access All Videos Lessons",
          isActive: true,
        },
        {
          id: 3,
          name: "Appear On Leaderboard",
          isActive: true,
        },
        {
          id: 4,
          name: "Browse Content Without Ads",
          isActive: false,
        },
        {
          id: 5,
          name: "Access All Assignments",
          isActive: false,
        },
        {
          id: 6,
          name: "Get Daily Prizes",
          isActive: false,
        },
        {
          id: 7,
          name: "Earn Certificate",
          isActive: false,
        },
        {
          id: 8,
          name: "1 GB Space For Hosting Files",
          isActive: false,
        },
        {
          id: 9,
          name: "Access Badge System",
          isActive: false,
        },
      ],
      joined: false,
    },
    {
      id: 2,
      name: "Basic",
      price: "7.99",
      features: [
        {
          id: 1,
          name: "Access All Text Lessons",
          isActive: true,
        },
        {
          id: 2,
          name: "Access All Videos Lessons",
          isActive: true,
        },
        {
          id: 3,
          name: "Appear On Leaderboard",
          isActive: true,
        },
        {
          id: 4,
          name: "Browse Content Without Ads",
          isActive: true,
        },
        {
          id: 5,
          name: "Access All Assignments",
          isActive: true,
        },
        {
          id: 6,
          name: "Get Daily Prizes",
          isActive: true,
        },
        {
          id: 7,
          name: "Earn Certificate",
          isActive: true,
        },
        {
          id: 8,
          name: "1 GB Space For Hosting Files",
          isActive: false,
        },
        {
          id: 9,
          name: "Access Badge System",
          isActive: false,
        },
      ],
      joined: true,
    },
    {
      id: 3,
      name: "Premium",
      price: "19.99",
      features: [
        {
          id: 1,
          name: "Access All Text Lessons",
          isActive: true,
        },
        {
          id: 2,
          name: "Access All Videos Lessons",
          isActive: true,
        },
        {
          id: 3,
          name: "Appear On Leaderboard",
          isActive: true,
        },
        {
          id: 4,
          name: "Browse Content Without Ads",
          isActive: true,
        },
        {
          id: 5,
          name: "Access All Assignments",
          isActive: true,
        },
        {
          id: 6,
          name: "Get Daily Prizes",
          isActive: true,
        },
        {
          id: 7,
          name: "Earn Certificate",
          isActive: true,
        },
        {
          id: 8,
          name: "1 GB Space For Hosting Files",
          isActive: true,
        },
        {
          id: 9,
          name: "Access Badge System",
          isActive: true,
        },
      ],
      joined: false,
    },
  ],
  files: [
    {
      id: 1,
      name: "my-file.pdf",
      image: pdf_file,
      person: "Elzero",
      date: "20/06/2020",
      size: "5.5MB",
    },
    {
      id: 2,
      name: "my-file.avi",
      image: avi_file,
      person: "Admin",
      date: "16/5/2021",
      size: "12.5MB",
    },
    {
      id: 3,
      name: "my-file.eps",
      image: eps_file,
      person: "Uploader",
      date: "16/5/2021",
      size: "2.7MB",
    },
    {
      id: 4,
      name: "my-file.psd",
      image: psd_file,
      person: "Osama",
      date: "16/5/2021",
      size: "15.1MB",
    },
    {
      id: 5,
      name: "my-file.dll",
      image: dll_file,
      person: "Coder",
      date: "16/5/2021",
      size: "2.2MB",
    },
    {
      id: 6,
      name: "my-file.png",
      image: png_file,
      person: "Coder",
      date: "16/5/2021",
      size: "1.1MB",
    },
    {
      id: 7,
      name: "my-file.pdf",
      image: pdf_file,
      person: "Elzero",
      date: "20/06/2020",
      size: "5.5MB",
    },
    {
      id: 8,
      name: "my-file.avi",
      image: avi_file,
      person: "Admin",
      date: "16/5/2021",
      size: "12.5MB",
    },
    {
      id: 9,
      name: "my-file.eps",
      image: eps_file,
      person: "Uploader",
      date: "16/5/2021",
      size: "2.7MB",
    },
    {
      id: 10,
      name: "my-file.psd",
      image: psd_file,
      person: "Osama",
      date: "16/5/2021",
      size: "15.1MB",
    },
    {
      id: 11,
      name: "my-file.dll",
      image: dll_file,
      person: "Coder",
      date: "16/5/2021",
      size: "2.2MB",
    },
    {
      id: 12,
      name: "my-file.png",
      image: png_file,
      person: "Coder",
      date: "16/5/2021",
      size: "1.1MB",
    },
    {
      id: 13,
      name: "my-file.pdf",
      image: pdf_file,
      person: "Elzero",
      date: "20/06/2020",
      size: "5.5MB",
    },
    {
      id: 14,
      name: "my-file.avi",
      image: avi_file,
      person: "Admin",
      date: "16/5/2021",
      size: "12.5MB",
    },
    {
      id: 15,
      name: "my-file.eps",
      image: eps_file,
      person: "Uploader",
      date: "16/5/2021",
      size: "2.7MB",
    },
    {
      id: 16,
      name: "my-file.psd",
      image: psd_file,
      person: "Osama",
      date: "16/5/2021",
      size: "15.1MB",
    },
    {
      id: 17,
      name: "my-file.dll",
      image: dll_file,
      person: "Coder",
      date: "16/5/2021",
      size: "2.2MB",
    },
    {
      id: 18,
      name: "my-file.png",
      image: png_file,
      person: "Coder",
      date: "16/5/2021",
      size: "1.1MB",
    },
    {
      id: 19,
      name: "my-file.pdf",
      image: pdf_file,
      person: "Elzero",
      date: "20/06/2020",
      size: "5.5MB",
    },
    {
      id: 20,
      name: "my-file.avi",
      image: avi_file,
      person: "Admin",
      date: "16/5/2021",
      size: "12.5MB",
    },
    {
      id: 21,
      name: "my-file.eps",
      image: eps_file,
      person: "Uploader",
      date: "16/5/2021",
      size: "2.7MB",
    },
    {
      id: 22,
      name: "my-file.psd",
      image: psd_file,
      person: "Osama",
      date: "16/5/2021",
      size: "15.1MB",
    },
    {
      id: 23,
      name: "my-file.dll",
      image: dll_file,
      person: "Coder",
      date: "16/5/2021",
      size: "2.2MB",
    },
    {
      id: 24,
      name: "my-file.png",
      image: png_file,
      person: "Coder",
      date: "16/5/2021",
      size: "1.1MB",
    },
  ],
  files_stats: [
    {
      id: 1,
      name: "PDF Files",
      count: 130,
      size: "6.5GB",
      Icon: FaRegFilePdf,
    },
    {
      id: 2,
      name: "Images",
      count: 130,
      size: "3.5GB",
      Icon: FaImages,
    },
    {
      id: 3,
      name: "Word Files",
      count: 110,
      size: "3.2GB",
      Icon: FaFileWord,
    },
    {
      id: 4,
      name: "CSV Files",
      count: 99,
      size: "2.9GB",
      Icon: FaFileCsv,
    },
  ],
  information: [
    {
      id: 1,
      title: "General Information",
      content: {
        "Full Name": "Osama Mohamed",
        Gender: "Male",
        Country: "Egypt",
      },
      isActive: true,
    },
    {
      id: 2,
      title: "Personal Information",
      content: {
        Email: "o@nn.sa",
        Phone: "019123456789",
        "Date Of Birth": "25/10/1982",
      },
      isActive: false,
    },
    {
      id: 3,
      title: "Job Information",
      content: {
        Title: "Full Stack Developer",
        "Programming Language": "Python",
        "Years Of Experience": "15+",
      },
      isActive: true,
    },
    {
      id: 4,
      title: "Billing Information",
      content: {
        "Payment Method": "Paypal",
        Email: "email@website.com",
        Subscription: "Monthly",
      },
      isActive: false,
    },
  ],
  skills: {
    html: ["HTML", "Pugjs", "HAML"],
    css: ["CSS", "SASS", "Stylus"],
    js: ["Javascript", "Typescript"],
    frameworks: ["Reactjs", "Vuejs"],
    test: ["Jest", "Jasmine"],
    php: ["PHP", "Laravel"],
    python: ["Python", "Django"],
  },
  activities: [
    {
      id: 1,
      name: "Store",
      desc: "Bought The Mastering Python Course",
      time: "18:10",
      day: "Yesterday",
      img: activity_1,
    },
    {
      id: 2,
      name: "Academy",
      desc: "Got The PHP Certificate",
      time: "16:05",
      day: "Yesterday",
      img: activity_2,
    },
    {
      id: 3,
      name: "Badges",
      desc: "Unlocked The 10 Skills Badge",
      time: "18:10",
      day: "Yesterday",
      img: activity_3,
    },
    {
      id: 4,
      name: "Store",
      desc: "Bought The Mastering Python Course",
      time: "18:10",
      day: "Yesterday",
      img: activity_1,
    },
  ],
};

export default data;
