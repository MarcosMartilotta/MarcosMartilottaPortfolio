import SectionTitle from "../../components/SectionTitle";
import { FormContainer } from "./styled-components/formContainer.styled";
import { ContactSection } from "./styled-components/ContactSection.styled";
import ContactForm from "./components/ContactForm";
const Contact = () => {
  return (
    <ContactSection>
      <div className="titleContainer">
        <SectionTitle title="Contact" />
      </div>
      <FormContainer>
        <ContactForm></ContactForm>
      </FormContainer>
    </ContactSection>
  );
};

export default Contact;
