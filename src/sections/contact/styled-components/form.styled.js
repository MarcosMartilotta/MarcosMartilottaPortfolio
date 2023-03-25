import styled from "styled-components";
import { theme } from "../../../theme/theme";
export const Form = styled.form`
  width: 70%;
  color: ${theme.letterColor};

  div {
    height: 4.8rem;
  }

  div:nth-child(3) {
    height: fit-content;
  }

  input {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    width: 100%;
    background-color: ${theme.backgroundColor};
    color: ${theme.letterColor};
  }
  textarea {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    width: 100%;
    background-color: ${theme.backgroundColor};
    color: ${theme.letterColor};
  }
  button {
    padding: 0.5rem;
    width: 100%;
    text-align: left;
    background: rgb(27, 122, 251);
    background: linear-gradient(
      135deg,
      rgba(27, 122, 251, 1) 0%,
      rgba(173, 197, 247, 1) 47%
    );
    color: black;
    cursor: pointer;
    border: none;
  }
`;
