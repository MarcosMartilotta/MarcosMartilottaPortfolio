import { AboutStyled } from "./styled-components/about.styled";
import SectionTitle from "../../components/SectionTitle";
import Triangle from "../../components/Triangle";

const About = () => {
  return (
    <AboutStyled>
      <div className="titleContainer">
        <SectionTitle title="About"></SectionTitle>
      </div>
      <div className="paragraphContainer">
        <div className="triangleContainer">
          <Triangle />
        </div>
        <p>
          I am currently looking for my first professional experience in the IT
          world. I was self-taught in front end technologies and Every day I
          carry out projects to reinforce my knowledge. Also, I meeting
          collaborating in the development and growth of the web "El valor
          justo", where you can see rental analytics in Buenos Aires. I look
          forward to meeting you!
        </p>
      </div>
    </AboutStyled>
  );
};

export default About;
