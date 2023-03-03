import HeroTitle from "./components/HeroTitle";
import { HeroStyled } from "./styled-components/hero.styled";
import Triangle from "../../components/Triangle";
const Hero = () => {
  return (
    <HeroStyled>
      {/*   <div className="photoContainer">
        <Triangle />
        <img src="" alt="" />
      </div> */}
      <HeroTitle />
    </HeroStyled>
  );
};

export default Hero;
