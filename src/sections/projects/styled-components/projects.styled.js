import styled from "styled-components";

export const StyledProjects = styled.section`
  position: relative;
  height: 24rem;
  width: 54rem;
  padding: 0 2rem 8rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 576px) {
    width: 54rem;
    height: 42rem;
  }

  @media (min-width: 768px) {
    width: 64rem;
    height: 42rem;
  }

  @media (min-width: 992px) {
    width: 74rem;
    height: 42rem;
  }

  @media (min-width: 1200px) {
    height: 42rem;
    width: 80rem;
  }
  .projectsContainer {
    position: absolute;
    left: 2rem;
    width: 74rem;
    display: flex;
    align-items: center;
    position: absolute;
    top: 4rem;

    @media (min-width: 576px) {
      width: 80rem;
    }

    @media (min-width: 768px) {
      width: 100rem;
    }

    @media (min-width: 992px) {
      width: 100rem;
    }

    @media (min-width: 1200px) {
      width: 100rem;
    }
    div {
      img {
        margin: 2rem;
        width: 4rem;
        height: 4rem;

        @media (min-width: 992px) {
          width: 6rem;
          height: 6rem;
        }

        @media (min-width: 1200px) {
          width: 8rem;
          height: 8rem;
        }
      }
    }
  }

  .titleContainer {
    position: absolute;
    top: 0;
    left: 2rem;
  }
`;
