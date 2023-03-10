import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  margin: 2rem;
  width: 16rem;
  height: 16rem;
  background-color: white;
  transition: 0.5s;
  cursor: pointer;

  @media (min-width: 576px) {
    width: 16rem;
    height: 16rem;
  }

  @media (min-width: 768px) {
    width: 24rem;
    height: 24rem;
  }

  @media (min-width: 992px) {
    width: 24rem;
    height: 24rem;
    &:hover {
      transform: translateY(10px);
    }
  }

  @media (min-width: 1200px) {
    width: 24rem;
  }

  .number {
    position: absolute;
    top: 0rem;
    left: 1rem;
    font-size: 6rem;
  }

  .projectName {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 2rem;
    width: 8rem;
    text-align: right;
  }
`;
