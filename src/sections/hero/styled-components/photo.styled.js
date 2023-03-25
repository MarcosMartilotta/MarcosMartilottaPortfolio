import styled from "styled-components";

export const PhotoStyled = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 32rem;

  img:nth-child(2) {
    width: 20rem;
    object-fit: cover;
    animation-name: upAndDown;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
    z-index: 1;
    @keyframes upAndDown {
      0% {
        transform: translateY(-0.3rem);
      }

      50% {
        transform: translateY(0.3rem);
      }

      100% {
        transform: translateY(-0.3rem);
      }
    }
  }

  img:nth-child(1) {
    position: absolute;
    width: 30rem;
    object-fit: cover;
    top: 7rem;
  }

  @media (min-width: 576px) {
    display: block;
    top: 15.65rem;
    left: 4rem;
    img:nth-child(2) {
      width: 12.5rem;
    }
    img:nth-child(1) {
      top: 4.5rem;
      left: 0rem;
      width: 12.5rem;
    }
  }
  @media (min-width: 768px) {
    top: 15.15rem;
    left: 14rem;
    img:nth-child(2) {
      width: 16rem;
    }
    img:nth-child(1) {
      top: 5.6rem;
      left: 0rem;
      width: 17rem;
    }
  }
  @media (min-width: 992px) {
    top: 13.4rem;
    left: 14.5rem;
    img:nth-child(1) {
      top: 6.9rem;
      width: 20rem;
    }
    img:nth-child(2) {
      width: 17rem;
    }
  }

  @media (min-width: 1200px) {
    top: 13.2rem;
    left: 14.5rem;
    img:nth-child(1) {
      top: 7rem;
      width: 22rem;
    }
    img:nth-child(2) {
      width: 19rem;
    }
  }
`;
