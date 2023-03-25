import styled from "styled-components";

export const Rule = styled.div`
  position: absolute;
  right: 0px;
  width: 3rem;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.79);
  -webkit-box-shadow: -18px 6px 107px 200px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: -18px 6px 107px 200px rgba(0, 0, 0, 0.79);
  box-shadow: -18px 6px 107px 200px rgba(0, 0, 0, 0.79);

  @media (max-width: 576px) {
    width: 0;
    -webkit-box-shadow: -140px 6px 107px 200px rgba(0, 0, 0, 0.79);
    -moz-box-shadow: -140px 6px 107px 200px rgba(0, 0, 0, 0.79);
    box-shadow: 140px 6px 107px 200px rgba(0, 0, 0, 0.79);
  }

  .logo {
    width: 3rem;
    img {
      width: 3rem;
    }
  }
`;
