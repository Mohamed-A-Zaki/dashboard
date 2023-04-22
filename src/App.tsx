import "./App.scss";
import Main from "./components/Main/Main";
import { ToastContainer } from "react-toastify";
import Sidebar from "./sections/Sidebar/Sidebar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <Main />
      <ScrollToTop />
      <ToastContainer />
    </div>
  );
}

export default App;
