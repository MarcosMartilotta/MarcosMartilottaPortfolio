import { Card } from "../styled-components/projectCard.styled";
import trapeze from "../assets/trapeze.png";
import triangle from "../assets/triangle.png";

const ProjectCard = ({ number, projectName }) => {
  return (
    <Card>
      <div className="number">{number}.</div>
      <div className="projectName">{projectName}</div>
      <div className="topTrapeze"></div>
      <div className="bottomTrapeze"></div>
      <div className="background">
        <img src={triangle} alt="background triangle of the card" />
        <img src={trapeze} alt="background trapeze of the card" />
      </div>
      <div className="linksContainer">
        <a href="">a ver</a>
      </div>
    </Card>
  );
};

export default ProjectCard;
