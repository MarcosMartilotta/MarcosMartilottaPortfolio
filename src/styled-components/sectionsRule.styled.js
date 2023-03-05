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
    -webkit-box-shadow: -50px 6px 107px 200px rgba(0, 0, 0, 0.79);
    -moz-box-shadow: -9px 6px 107px 200px rgba(0, 0, 0, 0.79);
    box-shadow: 80px 6px 107px 200px rgba(0, 0, 0, 0.79);
  }
`;
