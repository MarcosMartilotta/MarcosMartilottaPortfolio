import styled from "styled-components";

export const StyledProjects = styled.section`
  width: 54rem;
  height: 24rem;
  position: relative;
  padding: 0 2rem 8rem 2rem;

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
    width: 84rem;
  }
  .projectsContainer {
    position: absolute;
    left: 2rem;
    width: 74rem;
    top: 8rem;

    @media (min-width: 576px) {
      width: 84rem;
    }

    @media (min-width: 768px) {
      width: 104rem;
    }

    @media (min-width: 992px) {
      width: 104rem;
    }

    @media (min-width: 1200px) {
      width: 104rem;
    }
  }

  .titleContainer {
    position: absolute;
    top: 0;
    left: 2rem;
  }
`;
