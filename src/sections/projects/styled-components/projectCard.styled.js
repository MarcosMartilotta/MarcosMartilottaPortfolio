import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  margin: 2rem;
  width: 16rem;
  height: 16rem;
  transition: 0.5s;
  cursor: pointer;

  .background {
    width: 100%;
    img {
      width: 100%;
    }

    img:nth-child(1) {
      transform: translateY(0rem);
      transition: transform 1s ease-out;
    }

    img:nth-child(2) {
      position: absolute;
      top: -0.1rem;
      z-index: -1;
      transform: translateY(0rem);
      transition: transform 1s ease-out;
    }
  }

  .background:hover {
    img:nth-child(1) {
      transform: translateY(-16rem);
      transition: transform 1s ease-in;
    }

    img:nth-child(2) {
      transform: translateY(20rem);
      transition: transform 1s ease-in;
    }
  }

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
  }

  @media (min-width: 1200px) {
    width: 24rem;
  }

  .linksContainer {
  }

  .number {
    position: absolute;
    top: 0rem;
    left: 1rem;
    font-size: 6rem;
    z-index: 2;
  }

  .projectName {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 2rem;
    width: 8rem;
    text-align: right;
  }

  .background {
  }
`;
