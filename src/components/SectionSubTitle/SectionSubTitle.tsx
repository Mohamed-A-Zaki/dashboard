type Props = {
  children: string;
};

const SectionSubTitle = ({ children }: Props) => {
  return (
    <span className="sec-sub-title text-black-50 mb-3 d-block">{children}</span>
  );
};

export default SectionSubTitle;
