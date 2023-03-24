import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const HeroStyled = styled.section`
  position: relative;
  height: 50rem;
  width: 100%;
  padding: 10rem 1rem;
  display: flex;
  justify-content: left;
  background-color: ${theme.backgroundColor};

  @media (min-width: 576px) {
    padding: 20rem 2rem;
    width: initial;
  }
  @media (min-width: 768px) {
    padding: 20rem 12rem;
  }
`;
