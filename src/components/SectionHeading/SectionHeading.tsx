type Props = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return <div className="section-heading">{children}</div>;
};

export default SectionHeading;
