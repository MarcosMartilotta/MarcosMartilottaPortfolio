import myPhoto from "../assets/my-photo.png";
import { PhotoStyled } from "../styled-components/photo.styled";
import triangleBackground from "../assets/triangle-background.png";
const PhotoWithBackground = () => {
  return (
    <PhotoStyled>
      <img src={triangleBackground} alt="" />
      <img src={myPhoto} alt="Marcos's Martilotta Photo" />
    </PhotoStyled>
  );
};

export default PhotoWithBackground;
