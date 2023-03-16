import styled from "styled-components";
import { theme } from "../../../theme/theme";
export const HeroTitleStyled = styled.h1`
  position: relative;
  font-size: 5.4rem;
  letter-spacing: -0.2rem;
  line-height: 5.44rem;
  font-weight: 300;
  color: ${theme.letterColor};
  width: 65vw;
  min-width: 35rem;

  @media (min-width: 576px) {
    width: 50rem;
    line-height: 6rem;
    font-size: 6.6rem;
    margin-left: 2rem;
  }

  @media (min-width: 768px) {
    width: 60rem;
    font-size: 7.88rem;
    line-height: 7.88rem;
  }

  @media (min-width: 992px) {
    width: 70rem;
    font-size: 9rem;
    line-height: 7.88rem;
  }

  @media (min-width: 1200px) {
    width: 80rem;
    font-size: 10.3rem;
    line-height: 8.88rem;
  }

  div:nth-child(1) {
    text-align: right;
    @media (max-width: 576px) {
    }
  }
  div:nth-child(2) {
    text-align: right;
  }
  div:nth-child(3) {
    text-align: left;
    position: relative;
  }
  div:nth-child(4) {
    text-align: right;
  }
`;
