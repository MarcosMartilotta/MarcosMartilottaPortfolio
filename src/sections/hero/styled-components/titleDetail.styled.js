import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const DetailContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0.5rem;
  color: ${theme.letterColor};
  font-size: 1rem;
  letter-spacing: 0.1rem;
  line-height: 1.1rem;
  text-align: right;
  width: 6rem;
  height: 5rem;
  opacity: 0.8;

  div:nth-child(1) {
    height: 3rem;
  }
  div:nth-child(2) {
    line-height: 3.5rem;
  }
`;
