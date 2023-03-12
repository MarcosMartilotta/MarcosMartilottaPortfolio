import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const HeroStyled = styled.section`
  position: relative;
  height: 50rem;
  width: 100%;
  padding: 8rem 2rem;
  display: flex;
  justify-content: left;
  background-color: ${theme.backgroundColor};

  @media (min-width: 576px) {
    width: initial;
  }
  @media (min-width: 768px) {
    padding: 8rem 12rem;
  }
  .photoContainer {
    position: absolute;
    background-color: white;
    height: 10rem;
    width: 10rem;
    bottom: 4rem;
    @media (min-width: 768px) {
      height: 11rem;
      width: 11rem;
      top: 8rem;
    }
  }
`;
