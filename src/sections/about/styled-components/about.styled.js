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
    p {
      min-width: 32.4rem;
      font-size: 1.5rem;
      letter-spacing: 0.1rem;
      padding-left: 12rem;
      @media (min-width: 576px) {
        font-size: 1.5rem;
        width: 50rem;
      }

      @media (min-width: 768px) {
        font-size: 2rem;
        width: 60rem;
      }

      @media (min-width: 992px) {
        width: 70rem;
      }

      @media (min-width: 1200px) {
        width: 80rem;
      }
    }
  }
`;
