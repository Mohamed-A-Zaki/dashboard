import "./App.scss";
import Main from "./components/Main/Main";
import Sidebar from "./sections/Sidebar/Sidebar";

function App() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
