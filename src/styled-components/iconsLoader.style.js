import styled from "styled-components";
import { theme } from "../theme/theme.js";

export const LoaderStyled = styled.div`
  color: ${theme.letterColor};
  font-size: 3rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    animation: loading 2s linear infinite;
  }

  @keyframes loading {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
