import { SkillsStyled } from "./styled-components/skills.styled";
import SectionTitle from "../../components/SectionTitle";
import htmlIcon from "../../assets/imgs/htmlIcon.png";
import cssIcon from "../../assets/imgs/cssIcon.png";
import jsIcon from "../../assets/imgs/jsIcon.png";
import reactIcon from "../../assets/imgs/reactIcon.png";
import reduxIcon from "../../assets/imgs/reduxIcon.png";
import tailwindIcon from "../../assets/imgs/tailwindIcon.png";
import styledComponentsIcon from "../../assets/imgs/styledComponentsIcon.png";
import webpackIcon from "../../assets/imgs/webpackIcon.png";
import viteIcon from "../../assets/imgs/viteIcon.png";
import gitIcon from "../../assets/imgs/gitIcon.png";

const Skills = () => {
  return (
    <SkillsStyled>
      <div className="titleContainer">
        <SectionTitle title="Skills" />
      </div>
      <div className="skillsContainer">
        <div>
          <img src={htmlIcon} alt="html icon" />
        </div>
        <div>
          <img src={cssIcon} alt="css icon" />
        </div>
        <div>
          <img src={jsIcon} alt="js icon" />
        </div>
        <div>
          <img src={reactIcon} alt="react icon" />
        </div>
        <div>
          <img src={reduxIcon} alt="redux icon" />
        </div>
        <div>
          <img src={tailwindIcon} alt="tailwind icon" />
        </div>
        <div>
          <img src={styledComponentsIcon} alt="styled components icon" />
        </div>
        <div>
          <img src={webpackIcon} alt="webpack icon" />
        </div>
        <div>
          <img src={viteIcon} alt="vite icon" />
        </div>
        <div>
          <img src={gitIcon} alt="git icon" />
        </div>
      </div>
    </SkillsStyled>
  );
};

export default Skills;
