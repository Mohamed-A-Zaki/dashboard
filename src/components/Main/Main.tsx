import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Searchbar from "../../sections/Searchbar/Searchbar";
import Loading from "../Loading/Loading";

const Main = () => {
  return (
    <main className="flex-grow-1 d-flex flex-column vh-100 overflow-hidden position-relative">
      <Searchbar />
      <Suspense fallback={<Loading />}>
        <div className="p-3 overflow-auto">
          <Outlet />
        </div>
      </Suspense>
    </main>
  );
};

export default Main;
