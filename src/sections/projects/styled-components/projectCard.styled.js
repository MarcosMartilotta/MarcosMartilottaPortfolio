import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const Card = styled.div`
  position: relative;
  margin: 2rem;
  width: 16rem;
  height: 16rem;
  transition: 0.5s;

  .preview {
    height: 100%;
    position: absolute;
    z-index: -1;
    overflow: hidden;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: 99%;
      object-fit: cover;
      opacity: 0.2;
    }
  }
  .background {
    width: 100%;

    .linksContainer {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      transition: 1s;
      transition-delay: 0.1s;
      transform: scale(0);

      a {
        text-decoration: none;
        color: ${theme.letterColor};
        font-size: 1.5rem;
        text-shadow: 0px -1px 3px rgba(0, 0, 0, 0.99);
        cursor: pointer;

        @media (min-width: 568px) {
          font-size: 2.5rem;
        }
      }
    }
    img {
      z-index: 1;
      width: 100%;
    }

    img:nth-child(2) {
      transform: translateY(0rem);
      transition: transform 1s ease-out;
    }

    img:nth-child(3) {
      position: absolute;
      top: -0.1rem;
      z-index: -1;
      transform: translateY(0rem);
      transition: transform 1s ease-out;
    }
  }

  .background:hover {
    .linksContainer {
      opacity: 1;
      transform: scale(1);
    }
    img:nth-child(2) {
      transform: translateY(-16rem);
      transition: transform 0.5s ease-in;
    }

    img:nth-child(3) {
      transform: translateY(20rem);
      transition: transform 0.5s ease-in;
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
`;
