import SectionTitle from "../../components/SectionTitle";
import { ContactStyled } from "./styled-components/contact.styled";
import { FormContainer } from "./styled-components/form.styled";

const Contact = () => {
  return (
    <ContactStyled>
      <div className="titleContainer">
        <SectionTitle title="Contact" />
      </div>
      <FormContainer></FormContainer>
    </ContactStyled>
  );
};

export default Contact;
