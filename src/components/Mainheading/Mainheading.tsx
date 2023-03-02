import "./Mainheading.scss";

type Props = {
  children: string;
};

const Mainheading = ({ children }: Props) => {
  return (
    <h2 className="main-heading fw-semibold position-relative mb-4 pb-2">
      {children}
    </h2>
  );
};

export default Mainheading;
