import PageContent from "../PageContent/PageContent";
import Searchbar from "../../sections/Searchbar/Searchbar";

type Props = {
  direction: "ltr" | "rtl";
  setDirection: React.Dispatch<React.SetStateAction<"rtl" | "ltr">>;
};

const Main = ({ direction, setDirection }: Props) => {
  return (
    <main className="flex-grow-1 d-flex flex-column overflow-hidden position-relative">
      <Searchbar direction={direction} setDirection={setDirection} />
      <PageContent />
    </main>
  );
};

export default Main;
