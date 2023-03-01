import "./App.scss";
import { Outlet } from "react-router-dom";

import Sidebar from "./sections/Sidebar/Sidebar";
import Searchbar from "./sections/Searchbar/Searchbar";

function App() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <main className="flex-grow-1">
        <Searchbar />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
