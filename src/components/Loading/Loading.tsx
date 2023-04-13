import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <FadeLoader color="#0075ff" aria-label="Loading Spinner" />
    </div>
  );
};

export default Loading;
