import styled from "styled-components";
import { theme } from "../../../theme/theme";
export const AboutStyled = styled.section`
  position: relative;
  height: contain;
  padding: 0 2rem 8rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.letterColor};

  .titleContainer {
    position: absolute;
    top: 0;
    left: 2rem;
  }

  .paragraphContainer {
    position: relative;
    .triangleContainer {
      position: absolute;
      right: 0rem;
      bottom: 0rem;
      transform: rotate(90deg);

      @media (min-width: 575px) {
        right: initial;
        bottom: initial;
        left: 12rem;
        top: 0.8rem;
        transform: rotate(270deg);
      }
    }
    p {
      font-size: 1.5rem;
      letter-spacing: 0.1rem;
      padding-top: 3rem;
      padding-left: 3rem;
      width: 80vw;
      @media (min-width: 576px) {
        padding-top: 0.8rem;
        padding-left: 16rem;
        font-size: 1.5rem;
        width: 50rem;
      }

      @media (min-width: 768px) {
        padding-left: 16rem;
        font-size: 2rem;
        width: 60rem;
      }

      @media (min-width: 992px) {
        padding-left: 20rem;
        width: 70rem;
      }

      @media (min-width: 1200px) {
        padding-left: 20rem;
        width: 80rem;
      }
    }
  }
`;
