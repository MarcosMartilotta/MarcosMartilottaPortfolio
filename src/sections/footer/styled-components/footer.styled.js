import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const StyledFooter = styled.section`
  height: 4rem;
  background-color: ${theme.backgroundColor};
  color: ${theme.letterColor};
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    width: 80%;
    @media (min-width: 576px) {
      width: 50rem;
    }

    @media (min-width: 768px) {
      width: 60rem;
    }

    @media (min-width: 992px) {
      width: 70rem;
    }

    @media (min-width: 1200px) {
      width: 80rem;
    }
    li {
      a {
        text-decoration: none;
        color: ${theme.letterColor};
        font-size: 1.8rem;
        transition: 0.3s;
        opacity: 0.8;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
