import "./App.scss";
import Main from "./components/Main/Main";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Sidebar from "./sections/Sidebar/Sidebar";

function App() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <Main />
      <ScrollToTop />
    </div>
  );
}

export default App;
