import { StyledTriangle } from "../styled-components/triangle.styled";
import triangle from "../assets/imgs/triangle.png";
const Triangle = () => {
  return (
    <StyledTriangle>
      <img src={triangle} alt="Detail" />
    </StyledTriangle>
  );
};

export default Triangle;
