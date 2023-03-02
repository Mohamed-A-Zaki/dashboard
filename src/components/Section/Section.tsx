type Props = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ className = "", children }: Props) => {
  return (
    <section className={`${className} p-3 bg-white rounded-3 h-100`}>
      {children}
    </section>
  );
};

export default Section;
