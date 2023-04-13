import useScrollToTop from "../Hooks/useScrollToTop";
import PlansList from "../sections/PlansList/PlansList";
import Mainheading from "../components/Mainheading/Mainheading";

const Plans = () => {
  useScrollToTop();

  return (
    <div className="plans-page">
      <Mainheading>Plans</Mainheading>
      <PlansList />
    </div>
  );
};

export default Plans;
