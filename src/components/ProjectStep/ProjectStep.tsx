import "./ProjectStep.scss";

type Props = {
  step: string;
  status: string;
};

const ProjectStep = ({ step, status }: Props) => {
  return <div className={`step py-3 position-relative fw-semibold ${status}`}>{step}</div>;
};

export default ProjectStep;
