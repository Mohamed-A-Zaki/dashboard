import "./App.scss";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./sections/Sidebar/Sidebar";
import Searchbar from "./sections/Searchbar/Searchbar";

function App() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <main className="flex-grow-1">
        <Searchbar />
        <Suspense fallback="loading...">
          <div className="p-3">
            <Outlet />
          </div>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
