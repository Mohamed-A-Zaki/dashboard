import "./App.scss";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

import Main from "./components/Main/Main";
import Sidebar from "./sections/Sidebar/Sidebar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");

  return (
    <div className="App d-flex" dir={direction}>
      <Sidebar />
      <Main direction={direction} setDirection={setDirection} />
      <ScrollToTop />
      <ToastContainer />
    </div>
  );
}

export default App;
