import { HeroTitleStyled } from "../styled-components/heroTitle.styled";
import TitleDetail from "./TitleDetail";
const HeroTitle = () => {
  return (
    <HeroTitleStyled>
      <div>HI THERE!</div>
      <div>I'M MARCOS</div>
      <div>
        A FRONT END
        <TitleDetail />
      </div>
      <div>DEVELOPER</div>
    </HeroTitleStyled>
  );
};

export default HeroTitle;
