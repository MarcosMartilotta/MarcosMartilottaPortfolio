import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  height: fit-content;
  width: 40rem;
  padding: 0 2rem 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: top;
  @media (min-width: 576px) {
    width: 54rem;
    justify-content: right;
  }

  @media (min-width: 768px) {
    width: 60rem;
    justify-content: right;
  }

  @media (min-width: 992px) {
    width: 70rem;
    justify-content: right;
  }

  @media (min-width: 1200px) {
    width: 80rem;
    justify-content: right;
  }
`;
