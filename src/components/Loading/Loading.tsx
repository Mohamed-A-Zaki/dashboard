import { HashLoader  } from "react-spinners";

const Loading = () => {
  return (
    <div className="loading position-absolute top-50 start-50 translate-middle">
      <HashLoader  color="#0075ff" />
    </div>
  );
};

export default Loading;
