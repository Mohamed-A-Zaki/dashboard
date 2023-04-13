import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../Loading/Loading";

const PageContent = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="page p-3 overflow-auto">
        <Outlet />
      </div>
    </Suspense>
  );
};

export default PageContent;
