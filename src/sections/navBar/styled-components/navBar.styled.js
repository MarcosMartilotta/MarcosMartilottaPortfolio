import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const Nav = styled.nav`
  position: fixed;
  padding-top: 2rem;
  z-index: 2;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.backgroundColor};
  opacity: 0.9;

  .itemsContainer {
    position: absolute;
    top: 8rem;
    right: -2000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    transition: 0.5s;
    z-index: 2;
    font-size: 3rem;

    &.active {
      right: 0;
    }

    @media (min-width: 576px) {
      position: relative;
      right: 0;
      top: 3rem;
      flex-direction: row;
      justify-content: right;
      width: 50rem;
      font-size: 2rem;
    }

    @media (min-width: 768px) {
      width: 60rem;
    }

    @media (min-width: 992px) {
      width: 70rem;
    }

    @media (min-width: 1200px) {
      width: 80rem;
    }

    a {
      width: contain;
      height: 4rem;
      margin-bottom: 4rem;
      cursor: pointer;
      text-align: right;
      color: ${theme.letterColor};
      transition: 2s;

      @media (min-width: 576px) {
        margin-left: 8rem;
      }

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }

      &.active {
        text-decoration: underline;
      }
    }
  }

  .backGroundItems {
    position: absolute;
    top: 6rem;
    right: -2000px;
    background-color: ${theme.backgroundColor};
    opacity: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    transition: 0.5s;

    @media (max-width: 576px) {
      &.active {
        right: 0px;
        opacity: 1;
      }
    }
  }
`;
