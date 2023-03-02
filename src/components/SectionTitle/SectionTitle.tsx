type Props = {
  children: string;
};

const SectionTitle = ({ children }: Props) => {
  return <h3 className="sec-title fw-bold mb-3">{children}</h3>;
};

export default SectionTitle;
