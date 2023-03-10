import styled from "styled-components";
import { theme } from "../../../theme/theme";
export const SkillsStyled = styled.section`
  position: relative;
  height: 100%;
  padding: 0 2rem 8rem 2rem;
  display: flex;
  justify-content: right;
  align-items: center;
  color: ${theme.letterColor};

  .skillsContainer {
    padding-right: 6rem;
    width: 40rem;
    display: grid;
    justify-content: right;
    grid-template-columns: repeat(5, 4rem);
    grid-template-rows: repeat(2, 4rem);
    gap: 2rem;
    @media (min-width: 576px) {
      width: 50rem;
    }

    @media (min-width: 768px) {
      width: 60rem;
    }

    @media (min-width: 992px) {
      width: 70rem;
      grid-template-columns: repeat(5, 6rem);
      grid-template-rows: repeat(2, 6rem);
    }

    @media (min-width: 1200px) {
      width: 80rem;
      grid-template-columns: repeat(5, 8rem);
      grid-template-rows: repeat(2, 8rem);
    }

    div {
      img {
        width: 4rem;
        height: 4rem;

        @media (min-width: 992px) {
          width: 6rem;
          height: 6rem;
        }

        @media (min-width: 1200px) {
          width: 8rem;
          height: 8rem;
        }
      }
    }
  }

  .titleContainer {
    position: absolute;
    top: 0;
    left: 2rem;
  }
`;
