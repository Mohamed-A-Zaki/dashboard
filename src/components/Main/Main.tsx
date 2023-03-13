import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Searchbar from "../../sections/Searchbar/Searchbar";

const Main = () => {
  return (
    <main className="flex-grow-1 d-flex flex-column vh-100 overflow-hidden">
      <Searchbar />
      <Suspense fallback="loading...">
        <div className="p-3 overflow-auto">
          <Outlet />
        </div>
      </Suspense>
    </main>
  );
};

export default Main;
