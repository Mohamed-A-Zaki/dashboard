import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import QuickDraftForm from "../../components/QuickDraftForm/QuickDraftForm";
import SectionSubTitle from "../../components/SectionSubTitle/SectionSubTitle";

const QuickDraft = () => {
  return (
    <Section className="quick-draft">
      <SectionHeading>
        <SectionTitle>Quick Draft</SectionTitle>
        <SectionSubTitle>Write A Draft For Your Ideas</SectionSubTitle>
      </SectionHeading>

      <QuickDraftForm />
    </Section>
  );
};

export default QuickDraft;
