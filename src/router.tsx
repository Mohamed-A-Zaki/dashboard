import { createHashRouter } from "react-router-dom";
import App from "./App";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Page Not Found...</h1>,
    children: [],
  },
]);
