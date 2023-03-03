//styles for all SectionsTitles
import styled from "styled-components";
import { theme } from "../theme/theme.js";
export const Subtitle = styled.h2`
  color: ${theme.letterColor};
  @media (min-width: 576px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;
