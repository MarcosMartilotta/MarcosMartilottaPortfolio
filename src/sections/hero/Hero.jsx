import HeroTitle from "./components/HeroTitle";
import { HeroStyled } from "./styled-components/hero.styled";
import PhotoWithBackground from "./components/PhotoWithBackground";
const Hero = () => {
  return (
    <HeroStyled>
      <PhotoWithBackground />
      <HeroTitle />
    </HeroStyled>
  );
};

export default Hero;
