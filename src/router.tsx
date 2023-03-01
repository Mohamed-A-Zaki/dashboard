import { lazy } from "react";
import { createHashRouter } from "react-router-dom";

import App from "./App";

const Plans = lazy(() => import("./routes/Plans"));
const Files = lazy(() => import("./routes/Files"));
const Profile = lazy(() => import("./routes/Profile"));
const Courses = lazy(() => import("./routes/Courses"));
const Friends = lazy(() => import("./routes/Friends"));
const Settings = lazy(() => import("./routes/Settings"));
const Projects = lazy(() => import("./routes/Projects"));
const Dashboard = lazy(() => import("./routes/Dashboard"));

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Page Not Found...</h1>,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/files",
        element: <Files />,
      },
      {
        path: "/plans",
        element: <Plans />,
      },
    ],
  },
]);
