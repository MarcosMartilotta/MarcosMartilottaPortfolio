import { HeroTitleStyled } from "../styled-components/heroTitle.styled";
import TitleDetail from "./TitleDetail";
import Typed from "react-typed";

const HeroTitle = () => {
  return (
    <HeroTitleStyled>
      <div>HI THERE!</div>
      <div>I'M MARCOS</div>
      <div>
        A
        <Typed
          strings={["  FRONT END ", " REACT "]}
          typeSpeed={100}
          backSpeed={100}
          loop
        ></Typed>
        <TitleDetail />
      </div>
      <div>DEVELOPER</div>
    </HeroTitleStyled>
  );
};

export default HeroTitle;
