import styled from "styled-components";

export const ContactStyled = styled.section`
  position: relative;
  height: 50rem;
  width: 54rem;
  min-width: 32.4rem;
  padding: 0 2rem 8rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 576px) {
    width: 54rem;
  }

  @media (min-width: 768px) {
    width: 64rem;
  }

  @media (min-width: 992px) {
    width: 74rem;
  }

  @media (min-width: 1200px) {
    width: 84rem;
  }
  .titleContainer {
    position: absolute;
    top: 0;
    left: 2rem;
  }
`;
