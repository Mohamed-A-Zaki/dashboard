import PageContent from "../PageContent/PageContent";
import Searchbar from "../../sections/Searchbar/Searchbar";

const Main = () => {
  return (
    <main className="flex-grow-1 d-flex flex-column vh-100 overflow-hidden position-relative">
      <Searchbar />
      <PageContent />
    </main>
  );
};

export default Main;
