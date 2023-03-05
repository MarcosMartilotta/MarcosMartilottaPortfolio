import styled from "styled-components";
import { theme } from "../../../theme/theme";
export const AboutStyled = styled.section`
  position: relative;
  height: 100%;
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
      left: 8rem;
      top: 0.3rem;
      transform: rotate(270deg);

      @media (min-width: 575px) {
        left: 16rem;
      }
    }
    p {
      font-size: 1.5rem;
      letter-spacing: 0.1rem;
      padding-left: 12rem;
      width: 80vw;
      @media (min-width: 576px) {
        padding-left: 20rem;
        font-size: 1.5rem;
        width: 50rem;
      }

      @media (min-width: 768px) {
        padding-left: 20rem;

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
