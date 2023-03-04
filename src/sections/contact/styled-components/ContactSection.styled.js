import styled from "styled-components";
import { theme } from "../../../theme/theme";
export const ContactSection = styled.section`
  position: relative;
  height: 100%;
  padding: 0 2rem 0rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.letterColor};

  .titleContainer {
    position: absolute;
    top: 0;
    left: 2rem;
  }
`;
