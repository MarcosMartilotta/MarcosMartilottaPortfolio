import styled from "styled-components";
import { theme } from "../theme/theme";

export const StyledTriangle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(
    to bottom left,
    ${theme.veryLightBlue} 30%,
    ${theme.lightBlue} 30%,
    black 50%
  );
`;
